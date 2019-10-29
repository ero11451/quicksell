// const Sequelize = require('sequelize');
// const sequelize = require("sequelize")
// const {  Model } = require("sequelize")

// const db = new Sequelize('quicksell', 'muyi', 'fedgac11451', {
//   host: 'localhost',
//   dialect: 'mysql' 
// });

//  db.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// class productModel extends Model {}
// productModel.init({
//         username:Sequelize.STRING,
//         path: Sequelize.STRING,
//         description: Sequelize.STRING,
//         location: Sequelize.STRING,
//         price: Sequelize.INTEGER,
//         productname: Sequelize.STRING,
//         productcatigory: Sequelize.STRING,
//         quntity:Sequelize.INTEGER
//     }, { sequelize: db, modelName: "product" });

// productModel.sync({alter: true}).then( () => {
//     console.log("product Table created.");
// }).catch( (err) => {
//     console.log(err);
// });
// module.exports = productModel

// class userModel extends Model {}
// userModel.init({
//     username : { 
//         type:sequelize.STRING,
//         require:true
//      },
//     location:{ 
//         type:sequelize.STRING,
//         require:true,
//     },
//     matNumber:{ 
//         type:sequelize.STRING,
//         require:true,
//      },
//     phone:{ 
//         type:sequelize.INTEGER,
//         unique:true,
//         require:true 
//     },
//     email:{ 
//         require:true,
//         unique:true,
//         type:sequelize.STRING,
//      },
//     password:{ 
//         type:sequelize.STRING,
//         require:true 
//     },
//     userImage:{ 
//         type:sequelize.STRING,
//         require:true
//      }
// },{ sequelize:db, modelName:userModel})

// userModel.sync({alter:true})
// .then((user) => {
//     console.log("user table created "+user);
// }).catch((err) => {
//      console.log(err);
// });
// module.exports =  userModel 