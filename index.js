const thrift = require('thrift')
const Debounce = require('think-debounce')
const helper = require('think-helper')

const HBase = require('./gen-nodejs/Hbase.js')
const HBaseTypes = require('./gen-nodejs/Hbase_types.js')

/**
 * formatRows
 */

function formatRows(data, includeFamilies) {
  const rows = []
  for (let i=0; i<data.length; i++) {
    const r = {
      rowkey: data[i].row.toString('utf8'),
      columns: {}
    }

    let key
    let parts

    for (key in data[i].columns) {
      if (includeFamilies) {
        r.columns[key] = data[i].columns[key].value.toString('utf8')
      } else {
        parts = key.split(':')
        r.columns[parts[1]] = data[i].columns[key].value.toString('utf8')
      }
    }

    rows.push(r)
  }

  return rows
}

/**
 * prepareColumn
 * create a columnValue object
 * for the given column
 */

function prepareColumn(key, value) {
  let column

  const v = typeof value !== 'string' ?
    JSON.stringify(value) : value

  // default family to 'd' for data
  const name = key.split(':')
  column = name[1] ? name[0] : 'd'
  column += ':' + (name[1] ? name[1] : name[0])

  return new HBaseTypes.Mutation({
    column: column,
    value: v
  })
}

/**
 * prepareColumns
 * create an array of columnValue
 * objects for the given data
 */

function prepareColumns(data) {
  const columns = []
  let column
  let value

  for (column in data) {
    value = data[column]
    // ignore empty rows
    if (!value && value !== 0) {
      continue
    }
    columns.push(prepareColumn(column, value))
  }
  return columns
}

module.exports = class HbaseClient {
  constructor(options) {
    this.options = Object.assign({
      host: 'localhost',
      port: 9090,
      timeout: 3000,
      connect_timeout: 30000,
      logger: console
    }, options);
    this.logger = this.options.logger;
    this.connection = null;
    this.debounce = new Debounce();
  }
  getConnection() {
    if (this.connection) {
      return Promise.resolve(this.connection);
    }
    return this.debounce.debounce('getConnection', () => {
      return new Promise((resolve, reject) => {
        const connection = thrift.createConnection(this.options.host, this.options.port, {
          transport: thrift.TFramedTransport,
          protocol: thrift.TBinaryProtocol,
          connect_timeout: this.options.connect_timeout
        })
        connection.once('connect', () => {
          connection.connection.setKeepAlive(true)
          connection.client = thrift.createClient(HBase, connection)
          this.connection = connection;
          resolve(connection);
        })
        connection.on('error', err => {
          const error = new Error('ThriftHbaseClient connection error');
          this.logger.error(error);
          this.logger.error(err);
          reject(err);
        });
        connection.on('reconnecting', data => {
          this.logger.log('ThriftHbaseClient reconnecting', data);
        })
        connection.on('end', () => {
          this.logger.log('ThriftHbaseClient end');
        })
        connection.on('close', () => {
          this.logger.log('ThriftHbaseClient connection closed');
          reject(new Error('connection closed'))
        })
        connection.on('timeout', () => {
          this.logger.log('ThriftHbaseClient connection timeout');
          reject(new Error('connection timeout'))
        })
      })
    })
  }
  _getRow(options = {}) {
    const table = options.table
    return this.getConnection().then(connection => {
      return new Promise((resolve, reject) => {
        const handleResponse = (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows ? formatRows(rows, options.includeFamilies)[0] : undefined)
          }
        }
        if (options.columns) {
          connection.client.getRowWithColumns(table, options.rowkey, options.columns, null, handleResponse);
        } else {
          connection.client.getRow(table, options.rowkey, null, handleResponse)
        }
      })
    })
  }
  timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const err = new Error('ThriftHbaseClient timeout');
        err.errorType = 'ThriftHbaseClientTimeout';
        reject(err);
      }, this.options.timeout)
    })
  }
  _putRow(options = {}) {
    const table = options.table
    const columns = prepareColumns(options.columns)

    if (!options.rowkey) {
      return Promise.reject(new Error('missing required parameter: rowkey'))
    }
    return this.getConnection().then(connection => {
      return new Promise((resolve, reject) => {
        connection.client.mutateRow(table, options.rowkey, columns, null, (err, data) => {
          if (err) reject(err);
          resolve(data);
        })
      })
    })
  }
  async getRow(options, times = 1) {
    const put = this._getRow(options);
    const timeout = this.timeout();
    const data = await Promise.race([put, timeout]).catch(err => err);
    if (helper.isError(data)) {
      if (data.errorType === 'ThriftHbaseClientTimeout' && times < 3) {
        this.close();
        return this.getRow(options, times + 1);
      }
      return Promise.reject(data);
    }
    return data;
  }
  async putRow(options, times = 1) {
    const put = this._putRow(options);
    const timeout = this.timeout();
    const data = await Promise.race([put, timeout]).catch(err => err);
    if (helper.isError(data)) {
      if (data.errorType === 'ThriftHbaseClientTimeout' && times < 3) {
        this.close();
        return this.putRow(options, times + 1);
      }
      return Promise.reject(data);
    }
    return data;
  }
  close () {
    if (this.connection) {
      this.connection.connection.destroy();
      this.connection = null;
    }
  }
}
