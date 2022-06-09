const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://imtiyaz786:ansari@imtiyazansari.mol1y.mongodb.net/Imtiyaz-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb Hai Hum Samjhe ====>"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express Chalta hai ========> ' + (process.env.PORT || 3000))
});
