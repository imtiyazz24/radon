const productDetailsModel = require('../models/productDetailsModel')

const createProduct = async function (req, res){
    const data = req.body
    const save = await productDetailsModel.create(data)
    res.send({msg:save})

}

module.exports.createProduct=createProduct