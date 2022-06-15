const userModel = require('../models/userModel.js')

const createUser = async function(req, res){
    const data = req.body
    const save = await userModel.create(data)
    res.send({msg:save})
}

module.exports.createUser = createUser