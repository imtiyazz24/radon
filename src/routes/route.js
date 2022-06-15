const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const productDetailsController = require('../controllers/productDetailsController')
const orderDetailsController = require('../controllers/orderDetailsController')
// const middelware = require('../middelware/middel')
const newjwtController = require('../controllers/newjwtController')
const middel1 = require('../middelware/auth')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser",middelware.mid1,userController.createUser)
// router.post("/createProduct",productDetailsController.createProduct)
// router.post("/OrderDetails",middelware.mid1,orderDetailsController.OrderDetails)


router.post('/createUserOne',newjwtController.createUser)
router.post('/loginUserOne',newjwtController.loginUser)
router.get('/getloginOne/:userId',middel1.test,newjwtController.getLogin)
router.put('/updatelogin/:userId',middel1.test,newjwtController.updatelogin)
router.delete('/deleteLogin/:userId',middel1.test,newjwtController.deleteLogin)



module.exports = router;