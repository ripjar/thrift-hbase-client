# thrift-hbase-client

Hbase.thrift from https://raw.githubusercontent.com/apache/hbase/master/hbase-thrift/src/main/resources/org/apache/hadoop/hbase/thrift/Hbase.thrift

```
thrift --gen js:node Hbase.thrift
```

## install

```
npm i thrift-hbase-client
```

## use

```js
const HBase = require('thrift-hbase-client');
const instance = new HBase({
  host: '',
  port: 9090
});

instance.getRow({table: 'tableName', rowkey: key}).then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
})

instance.putRow({
  table: 'tableName',
  rowkey: 'welefen_1',
  columns: {
    'value:default': 'welefen_1'
  }
}).then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
})

```