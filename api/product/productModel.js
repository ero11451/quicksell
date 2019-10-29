const Sequelize = require('sequelize');

const db = new Sequelize('quicksell', 'muyi', 'fedgac11451', {
  host: 'localhost',
  dialect: 'mysql' 
});

 db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const {  Model } = require("sequelize") ;
class productModel extends Model {}
productModel.init({
        username:Sequelize.STRING,
        path: Sequelize.STRING,
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        price: Sequelize.INTEGER,
        productname: Sequelize.STRING,
        productcatigory: Sequelize.STRING,
        quntity:Sequelize.INTEGER,
        university:Sequelize.STRING
    }, { sequelize: db, modelName: "product" });

productModel.sync({alter: true}).then(() => {
    console.log("product Table created.");
}).catch( (err) => {
    console.log(err);
});
module.exports = productModel