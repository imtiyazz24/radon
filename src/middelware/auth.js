const test =function (req,res,next){
    const token = req.headers['x-auth-token']
    if(!token) return res.send({status:false,massage:"headers not found"})
    next()
}

module.exports.test=test