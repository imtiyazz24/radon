const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({createBookName: savedData})
}

const getBook= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({getBookName: allUsers})
}

module.exports.createBook= createBook
module.exports.getBook= getBook