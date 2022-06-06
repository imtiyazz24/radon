const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}



const bookList = async function (req ,res){
    const list = await BookModel.find().select({bookName :1 , authorName:1,_id: 0})
    res.send({alllist : list})
}
const getBooksInYear = async function (req,res){
    const years = req.body
    const save = await BookModel.find({year : years.year})
    res.send({msg : save})
}

const  getParticularBooks = async function (req ,res){
    let get = req.body
    
    let save = await BookModel.find(get)
    res.send({msg : save})
}
const getXINRBooks = async function (req,res){
    // const year = req.body
    const save = await BookModel.find({$or:[{'prices.indianPrice':'100'},{'prices.indianPrice':'200'},{'prices.indianPrice':'500'}]} ) 
    res.send({msg : save})
}

const getRandomBooks = async function(req,res){
    const save = await BookModel.find({ stockAvailable : true , totalPages : {$gt:500}})
    res.send({msg:save})
}


module.exports.createBook= createBook

module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks