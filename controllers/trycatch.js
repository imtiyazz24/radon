const usermodels = require('../models/userModel')

const createnew = async function (req, res){
try{
    let data = req.body;
    console.log(data)
    if(Object.keys(data).length != 0){
        let save = await usermodels.create(data)
        res.status(201).send({status:true,msg:save})
    }else{
        res.status(401).send({status:true,msg:"bad request"})
    }
}
catch(error){
    console.log(error.message)
    res.status(513).send({status:true,error:error.message})
}
}
module.exports.createnew=createnew