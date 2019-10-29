const express  = require("express")
const router = express.Router()
const multer  = require("multer")

const productModel = require("./productModel")
const storage = multer.diskStorage({
    destination:"./public/upload",
    filename:(req,file,cd)=>{
        cd(null,file.fieldname + "-" +
        Date.now() +file.originalname
        )}
})
const upload = multer({storage}).single("product")

router.post('/uploadProduct', (req, res) => 
    upload(req,res,(err)=>{
        if (err instanceof multer.MulterError) {
            res.send(err);
          } else if (err) { res.send(err);
          }else{
              const { description , price,location, productname,productcatigory } = req.body
              const  path  = req.file.path
              productModel.create({ path, description, price,location, productname, productcatigory})
               .then((product) => {
                   res.send(JSON.stringify(product));
               }).catch((err) => {
                   
               });
          }
    })

);
module.exports = uploadProduct = router