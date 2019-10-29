const Sequelize = require('sequelize');

const db = new Sequelize('quicksell', 'muyi', 'fedgec11451', {
  host: 'localhost',
  dialect: 'mysql' 
});

 db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  module.exports = {db}