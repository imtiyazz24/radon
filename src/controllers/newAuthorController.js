const newAuthorModel = require('../models/newAuthorModel')

const createAuthorOne = async function (req, res) {
    let data = req.body
    let save = await newAuthorModel.create(data)
    res.send({massage:save})
}
const newAuthor = async function (req, res){
    let data = req.body
    let save = await newAuthorModel.create(data)
    res.send({massage:save})
}

module.exports.createAuthorOne=createAuthorOne
module.exports.newAuthor=newAuthor