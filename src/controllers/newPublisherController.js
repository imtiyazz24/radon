const newPublisherModel = require('../models/newPublisherModel')

const createPublisherOne = async function (req, res){
    const data = req.body
    const save = await newPublisherModel.create(data)
    res.send({massage:save})
}

const newPublisher = async function (req, res){
    const data = req.body
    const save = await newPublisherModel.create(data)
    res.send({massage:save})
}

module.exports.createPublisherOne = createPublisherOne
module.exports.newPublisher = newPublisher
