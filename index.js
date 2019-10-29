const express = require('express')
const app = express()
const port = 3000
const uploadProduct = require("./api/product/uploadProduct")
const findeproduct = require("./api/product/findProduct")
const deleteProduct = require("./api/product/deleteProduct")
const RegisterUser = require("./api/user/register")
const login = require("./api/user/login")
app.use(express.static('public'))
app.use('/', uploadProduct)
app.use('/', findeproduct);
app.use('/', deleteProduct);
app.use('/', RegisterUser);
app.use('/', login);
app.get('/', (req, res) => {
    res.send("there is  colection there is a");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))