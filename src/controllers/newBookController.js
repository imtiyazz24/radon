const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')

const createAuthor = async function (req,res){
    const data = req.body
    const save = await authorModel.create(data)
    res.send({msg : save})
}
const createText = async function (req,res){
    const data = req.body
    const save = await bookModel.create(data)
    res.send({msg:save})
}
const getbookbych= async function(req,res){
    
    const save = await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")    
    const bookData = await bookModel.find({author_id:save[0].author_id})
    res.send({msg:bookData})

}

module.exports.createAuthor = createAuthor
module.exports.createText = createText
module.exports.getbookbych=getbookbych