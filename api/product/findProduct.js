const productModel = require("./productModel")
const express  = require("express")
const router = express.Router()
router.post("/oneproduct",(req,res,next)=>{
    const { productname , } = req.body
    productModel.findOne({where:{productname:productname}})
    .then((product) => {
        res.send(product);
    }).catch((err) => {
        console.log(err)
    });
})
router.get("/allproduct",(req,res,next)=>{
    productModel.findAll()
    .then((product) => {
        res.send(product);
    }).catch((err) => {
        console.log(err)
    });
})
router.get("home",(req,res)=>{
    res.send("welcom to the mean chart app you are a legend");
})
module.exports = findproduct = router