const exoress = require('exoress')
const router = express.Router()
const usermodel = require('./userModel')
router.put('', (req, res) => {
    const {username, phone,email,password,university}= req.body
    usermodel.update({where:{
        username:username,
        phone:phone,
        email:email,
        password:password,
        university:university
    }}).then((user) => {
        res.send(user);
    }).catch((err) => {
        res.send(err);
    })
});
app.get('', (req, res) => {
    
});
module.exports = profile = router