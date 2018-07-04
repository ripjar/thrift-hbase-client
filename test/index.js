const Hbase = require('../index');
const instance = new Hbase({
  port: 9090
})

async function hbase() {
  // while(1) {
  //   await new Promise((resolve) => {
  //     setTimeout(resolve, 100)
  //   })
  //   const key = Math.random() + 'www';
  //   instance.getRow({table: 'game_stat', rowkey: key}).then(data => {
  //     console.log(data);
  //   }).catch(err => {
  //     console.error(err);
  //   })
  // }

  while(1) {
    await instance.putRow({
      table: 'game_stat',
      rowkey: 'welefen_1',
      columns: {
        'value:default': 'welefen_1'
      }
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.error(err);
    })
  }

  await instance.getRow({table: 'game_stat', rowkey: 'welefen_1'}).then(data => {
    console.log(data);
  }).catch(err => {
    console.error(err);
  })
};

hbase();