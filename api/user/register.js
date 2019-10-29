const express  = require("express")
const router = express.Router()
const multer = require("multer")
const userModel = require("./userModel")
const  jwt = require('jsonwebtoken');
const storage =  multer.diskStorage({
    destination:"./public/upload",
    filename:(req,file,cd)=>{
        cd(null,file.filename + "-" + Date.now + file.originalname)
    }
})

const upload = multer({storage:storage}).single("userimage")
router.post('/register', (req, res, next) => {
     upload(req,res,(err)=>{
      if (err) {
             res.send(err);
      }else{
        const { usernama,location,matNumber,phone, email, password,buyer,seller } = req.body 
        const userimage = req.file.path  
        userModel.create({usernama,location,matNumber,phone,email,password,userimage,buyer,seller})
        .then((user) => {
           const token = jwt.sign({user},"gotohell")
           res.send(token);
        }).catch((err) => {
            res.send(err);
        });
         }
     })
});
module.exports = RegisterUser = router