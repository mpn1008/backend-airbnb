let Sequelize = require('sequelize');

let informModel = require('./model/inform');

let sqlize = new Sequelize('airbnb', 'root', '123DSA123dsa',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max: 10,
        min: 0,
        accquire:30000,
        idle:10000
    }
});
sqlize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
sqlize.sync().then(() => {
    console.log("synced");
});
let inform = informModel(sqlize,Sequelize);

module.exports = inform;