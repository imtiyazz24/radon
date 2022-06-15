const jwt = require('jsonwebtoken');
const newjwtModel = require('../models/newjwtModel');


const createUser = async function(req, res){
    let data = req.body
    let save = await newjwtModel.create(data)
    res.send({msg:save})

}

const loginUser = async function (req, res){
    const username = req.body.emailId
    const userpassword = req.body.password
    let user = await newjwtModel.findOne({emailId:username, password:userpassword})
    if(!user) return res.send({status: false ,msg:"Invalid emailid and password"})
    let token = await jwt.sign({userId:user._id.toString()},'imtiyaz-radon')
    res.send({status:true, data:token})

}

const getLogin = async function(req, res){
    
//    let token = req.headers["x-auth-token"]
//    if(!token) return res.send({status:false,massage:"header not found"})
//       jwt.verify(token,'imtiyaz-radon')
    const userId = req.params.userId
   let user = await newjwtModel.findById(userId)
   if(!user) return res.send({status: false , msg3: "invalid"})
   res.send({status:true, msg4:user})
    
  
}
const updatelogin = async function(req, res){
    // let token = req.headers["x-auth-token"]
    //  if(!token) return res.send({status:false,massage:"header not found"})
      const userId = req.params.userId
      const updateBody = req.body
      let user = await newjwtModel.findByIdAndUpdate({_id:userId},updateBody,{new:true});
      res.send({status:true,msg:user});
}

const deleteLogin = async function(req, res){
    // let token = req.headers["x-auth-token"]
    //  if(!token) return res.send({status:false,massage:"header not found"})
      const userId = req.params.userId
      const updateBody = req.body
      let user = await newjwtModel.findByIdAndUpdate({_id:userId},{isDeleted:updateBody.isDeleted},{new:true});
      res.send({status:true,msg:user})
} 


module.exports.loginUser=loginUser
module.exports.createUser=createUser
module.exports.getLogin=getLogin
module.exports.updatelogin=updatelogin
module.exports.deleteLogin=deleteLogin