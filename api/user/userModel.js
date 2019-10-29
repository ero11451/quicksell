const Sequelize = require('sequelize');
const sequelize  = require("sequelize")
const {  Model } = require("sequelize") 

const db = new Sequelize('quicksell', 'muyi', 'fedgac11451', {
        host: 'localhost',
        dialect: 'mysql' 
})
 db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

class userModel extends Model {}
userModel.init({
    username : { 
        type:sequelize.STRING,
        require:true
     },
    location : { 
        type:sequelize.STRING,
        require:true,
    },
    matNumber : { 
        type:sequelize.STRING,
        require:true,
     },
    email : { 
        require:true,
        unique:true,
        type:sequelize.STRING,
     },
    password : { 
        type:sequelize.STRING,
        require:true 
    },
    userImage : { 
        type:sequelize.STRING,
        require:true
     },
     buyer : {
         type:sequelize.BOOLEAN
     },
     seller : {
         type:sequelize.BOOLEAN
     },
     university :{
         type:sequelize.STRING
     },
     phone:{
         type:sequelize.INTEGER
     }
    }, { sequelize: db, modelName: "user table" });

userModel.sync({alter: true}).then(() => {
    console.log("user Table created.");
}).catch( (err) => console.log(err) );

module.exports = userModel


