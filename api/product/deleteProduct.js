const productModel = require("./productModel")
const express  = require("express")
const router = express.Router()
const fs = require('fs');

router.delete('/delet/:id', (req, res) => {
     const id = req.params.id
     productModel.destroy({where:{id:id}})
    .then((product) => {
        const imgpath = product.path
        fs.unlinkSync(imgpath,(err)=>{
        if (err)  console.log(err) ;res.send("error");
             res.send("image deleted");
         })
    }).catch((err) => {
        res.send(err);
        console.log(err)
    });
});
module.exports = deleteProduct = router

