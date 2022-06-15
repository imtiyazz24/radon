const mid1 = function(req, res, next){
    const data = req.headers.isfreeappuser
    if(!data){
        res.send({msg:"Mandatory header"})  
    }
    else{
        next()
       
    }
    
}

const mid2 = function(req, res ,next){
    const data = req.body.userId
    if(!data){
        res.send({msg:"userId is invalid"})
        
    }else{
        next()
    }

}
const mid3 = function(req, res, next){
    const data = req.body.productId
    if(!data){
        res.send({msg:"productId is invalid"})
        
    }else{
        next()
    }
}





module.exports.mid1=mid1
module.exports.mid2=mid2
module.exports.mid3=mid3