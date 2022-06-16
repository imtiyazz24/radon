const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const trycatch= require("../controllers/trycatch")
const middelware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts",middelware.authenticate,middelware.authorise, userController.postMessage)

router.put("/users/:userId",middelware.authenticate,middelware.authorise, userController.updatelogin)
router.delete('/users/:userId', middelware.authenticate,middelware.authorise, userController.deleteLogin)


router.post('/createnew',trycatch.createnew)




module.exports = router;