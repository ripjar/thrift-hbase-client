const thrift = require('thrift')
const Debounce = require('think-debounce')
const helper = require('think-helper')

const HBase = require('./gen-nodejs/Hbase.js')
const HBaseTypes = require('./gen-nodejs/Hbase_types.js')

/**
 * formatRows
 */

function formatRows(data, includeFamilies, return_raw = false) {
    const rows = []
    for (let i = 0; i < data.length; i++) {
        const r = {
            rowkey: data[i].row.toString('utf8'),
            columns: {}
        }

        let key
        let parts

        for (key in data[i].columns) {
            if (includeFamilies) {
                r.columns[key] = return_raw ? data[i].columns[key].value : data[i].columns[key].value.toString('utf8')
            } else {
                parts = key.split(':')
                r.columns[parts[1]] = return_raw ? data[i].columns[key].value : data[i].columns[key].value.toString('utf8')
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
            logger: console,
            transport: thrift.TBufferedTransport,
            protocol: thrift.TBinaryProtocol,
            compat: "0.98",
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
                    transport: this.options.transport,
                    protocol: this.options.protocol,
                    timeout: this.options.timeout,
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
                connection.on('close', () => {
                    this.logger.log('ThriftHbaseClient connection closed');
                    this.close();
                })
            })
        })
    }
    getRow(options = {}) {
        const table = options.table
        return this.getConnection().then(connection => {
            return new Promise((resolve, reject) => {

                // listening error event
                // callback not invoked when connection error
                const connectionError = err => reject(err);
                connection.once('error', connectionError);

                const handleResponse = (err, rows) => {
                    connection.removeListener('error', connectionError);

                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows ? formatRows(rows, options.includeFamilies, options.return_raw)[0] : undefined)
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
    putRow(options = {}) {
        const table = options.table
        const columns = prepareColumns(options.columns)

        if (!options.rowkey) {
            return Promise.reject(new Error('missing required parameter: rowkey'))
        }
        return this.getConnection().then(connection => {
            return new Promise((resolve, reject) => {

                // listening error event
                // callback not invoked when connection error
                const connectionError = err => reject(err);
                connection.once('error', connectionError);

                connection.client.mutateRow(table, options.rowkey, columns, null, (err, data) => {
                    connection.removeListener('error', connectionError);

                    if (err) reject(err);
                    resolve(data);
                })
            })
        })
    }
    close() {
        if (this.connection) {
            this.connection.connection.destroy();
            this.connection = null;
        }
    }
}
