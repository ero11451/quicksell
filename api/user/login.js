const express  = require("express")
const router = express.Router()
const userModel = require("./userModel")
const  jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    const email = req.body
    userModel.findOne({where:{email:email}})
    .then((user) => {
        const token = jwt.sign({user},"gotohell")
        if (!token) {
            res.send("you can't login with this account")
        }
        res.send(token);
    }).catch((err) => {
        res.send(JSON.stringify({err:err,errmessa:"there was an error with you input"}));
    });  
})
module.exports = login = router