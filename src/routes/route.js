const express = require('express');
const externallogger = require('../logger/logger.js')
const externalhelper = require('../util/helper.js')
const externalvalidator=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    externallogger.welcome()
    externalhelper.printDate()
    externalhelper.printMonth()
    externalhelper.printBatch()
    externalvalidator.trim()
    externalvalidator.upperCase()
    externalvalidator.lowerCase()

    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason