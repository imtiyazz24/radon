const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const _ = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    //===============================================1=================================================
   function chunk(){
       let month = ['January','February','March','April','May','June','July','August','September','October','November','December']
        return(_.chunk(month,4))
     }
     console.log(chunk())
//====================================================2=====================================================
      function  tail(){
          let lastElemenrt = [1,3,5,7,9,11,13,15,17,19]
          return(_.tail(lastElemenrt))
      }
      console.log(tail())
      //=============================================3======================================================

        function union(){
               let marge = _.union([1,2],[3,4],[4,5],[6,7],[1,2])
                return marge
        }
        console.log(union())

        //=============================================4===============================================

            function fromPairs(){
                  let value = _.fromPairs([['horror','The conjuring series'],['Romantic','Dilwale Dulhania Le Jayenge'],['comedy','3idiots']])
                      return value
            }
            console.log(fromPairs())


    res.send('Chunk,tail,union,formPairs fucntion Check!')
});
//================================================ 1 ====================================================

router.get('/movies', function (req, res) {
      let movies = ['The Shawshank Redemption','The Godfather','The Dark Knight','The Godfather: Part II','12 Angry Men']
    
     res.send(movies)
});
//=====================================================2 or 3===============================================

router.get('/movies/:indexNumber', function(req, res){
    const moviesName = ['The Shawshank Redemption','The Godfather','The Dark Knight','The Godfather: Part II','12 Angry Men']
          if (req.params.indexNumber < moviesName.length){
              res.send(moviesName[req.params.indexNumber])
          }else {
              res.send("Enter valid index number")
          }
    res.send()
});

//======================================================== 4 ==================================================

router.get('/films', function(req, res){
    const filmName=[ {
        'id': 1,
        'name': 'The Shining'
        }, {
        'id': 2,
        'name': 'Incendies'
        }, {
        'id': 3,
        'name': 'Rang de Basanti'
        }, {
        'id': 4,
        'name': 'Finding Nemo'
        }]
        
        res.send(filmName)

});

//=============================================== 5 =================================================

router.get('/films/:filmId', function (req ,res){
    const filmName=[ {
        'id': 1,
        'name': 'The Shining'
        }, {
        'id': 2,
        'name': 'Incendies'
        }, {
        'id': 3,
        'name': 'Rang de Basanti'
        }, {
        'id': 4,
        'name': 'Finding Nemo'
        }]
    if(req.params.filmId < filmName){
        res.send(filmName[req.params.filmId])
    }else {
        res.send('No movie exists with this id')
    }

    res.send()
})

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason