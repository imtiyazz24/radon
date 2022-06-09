const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


const newAuthorController = require('../controllers/newauthorController')
const newBookController = require('../controllers/newBookController')
const newPublisheController = require('../controllers/newPublisherController')

router.post('/createAuthorOne',newAuthorController.createAuthorOne)
router.post('/createBookOne',newBookController.createBookOne)
router.post('/createPublisherOne',newPublisheController.createPublisherOne)
router.post('/checkId',newBookController.checkId)
router.post('/checkPubliserId',newBookController.checkPubliserId)
router.get('/getBookOne',newBookController.getBookOne)
router.put('/newPublisher',newPublisheController.newPublisher)
router.put('/newAuthor',newAuthorController.newAuthor)
router.put('/updatePrice',newBookController.updatePrice)









module.exports = router;