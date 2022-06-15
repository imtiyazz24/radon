const orderDetailsModel = require('../models/orderDetailsModel')
const userModel = require('../models/userModel')
const productDetailsModel = require('../models/productDetailsModel')

const OrderDetails = async function (req, res){
      let data = req.body //userid,productid
      const userId=data.userId
      const presentUser = await userModel.findById(data.userId)
      if(!presentUser){
        res.send({msg:"Invalid UserID"})
      }
      const presentProduct = await productDetailsModel.findById(data.productId)
      if(!presentProduct){
        res.send({msg:"invalid ProductID"})
      }
      let check = req.headers.isfreeappuser
      if(check){
        let order = await orderDetailsModel.create(data)
        let updatedData= await orderDetailsModel.findOneAndUpdate({_id:order._id},{amount:0},{new:true})
        updatedData['isFreeAppUser']=true
        res.send({msg:updatedData})
        
      }else{
        let user = await userModel.find({_id:userId._id})
        const balance=user[0].balance
        const product=await productDetailsModel.find({_id:productId._id})
        const price=product[0].price
        if(balance-price>=0){
             const createOrder= await orderModel.create(data)//createordetr
             const updatedData =await orderModel.findOneAndUpdate({_id:createOrder._id},{amount:price},{new:true})
             updatedData['isFreeAppUser']=false
             const userbalance=({amount:balance-price},{new:true})
             send(updatedData,userbalance)
            }
            else{
                res.send({msg:'insufficient balance'})
            }
      }

}


module.exports.OrderDetails=OrderDetails