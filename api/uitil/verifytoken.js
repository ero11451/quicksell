const varifyToken = (req,res,next)=>{
    const token = req.header
    if (!token) {
        res.send("please provide a token . token is not provided")
    }else{
        res.send(token);
    }
    jwt.verify(user,"gotohell",(err,user)=>{
        if (err) {
            res.send(JSON.stringify({
                err:err,
                errmessage:"you dont have an account please register"
            }),)
        }else{
            res.send(user);
        }
    })

}
