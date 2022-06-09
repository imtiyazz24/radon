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
const getbookbychetanbhagat= async function(req,res){
    let data = await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    let save = await bookModel.find({author_id:data[0].author_id})
    res.send({msg:save})
 
}
const bookUpdate = async function (req,res){
    let data = req.body
    let save = await bookModel.findOneAndUpdate({name:data.name,price:data.price})
    res.send({msg:save})

}

const cost = async function (req,res){
    let data = await bookModel.find( {price: {$in: [50,100] } }).select({author_id:1,_id:0})
    for(let i=0;i<data.length;i++){
        let save = await authorModel.find({author_id:data[i].author_id}).select({author_name:1})
        res.send({msg:save})
    }
    
    res.send()
}

const getBook = async function (req,res){
    let id = req.params.Author_id;
    const book = await bookModel.find({author_id:id}).select({name:1,_id:0})
    res.send({msg:book})

}
const getAge = async function (req,res){
    const data = await authorModel.findOne ({$and: [{age:{$gt:50}},{rating:{$gt:4}}]})
    res.send({msg:data})
}




module.exports.createAuthor = createAuthor
module.exports.createText = createText
module.exports.getbookbychetanbhagat=getbookbychetanbhagat
module.exports.bookUpdate = bookUpdate
module.exports.cost=cost
module.exports.getBook=getBook
module.exports.getAge=getAge
