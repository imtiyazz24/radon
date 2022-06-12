const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://imtiyaz786:ansari@imtiyazansari.mol1y.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("Assingment express js ip or date");
        next();
  }
  );

  const requestIp = require('request-ip');
   app.use(requestIp.mw())

  app.use(
         function (req, res, next){
         const date =moment().format('LLLL');
         const ip = req.clientIp;
         const request = req.originalUrl;
         console.log(date,",",ip,",",request)
         next();
  })



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
