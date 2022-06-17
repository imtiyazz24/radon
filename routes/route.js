const express = require('express');
const router = express.Router();
const axios1 = require('../controllers/axios')

router.get('/getdata',axios1.getdata)
router.get('/district',axios1.district)
router.get('/weatherData',axios1.weatherData)
router.get('/weathercities',axios1.weathercities)
router.post('/meme',axios1.meme)


module.exports = router;