const axios = require('axios')

const getdata = async function (req, res) {
    let option = {
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    }
    let result = await axios(option);
    let data = result.data
    res.status(200).send({ status: true, message: data })
}

const district = async function (req, res) {
    try {
        let district = req.query.district_id
        let date = req.query.date
        // console.log(district)
        // console.log(date)
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ status: true, message: data })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
}


const weatherData = async function (req, res) {
    let report = req.query.q
    let id = req.query.appid
    let option = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${report}&appid=${id}`
    }
    let result = await axios(option);
    // console.log(result)
    let data = result.data
    let temp = result.data.main.temp
    res.status(200).send({ status: true, message: temp, another: data })
}


const weathercities = async function (req, res) {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow", "Jharkhand"]
    const cityObj = []
    for (i = 0; i < cities.length; i++) {
        let obj = { city: cities[i] }
        let option = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=292a5e6cfa61fc6713093e38215b65a7`
        }
        let result = await axios(option)
        obj.temp = result.data.main.temp
        cityObj.push(obj)
        // console.log(cityObj)

    }
    let shorted = cityObj.sort(function (a, b) { return a.temp - b.temp })
    res.status(200).send({ status: true, data: shorted })

}

const meme = async function(req, res){
    let template_id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let Username = req.query.username
    let password = req.query.password

    let option = {
        method : 'post',
        url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${Username}&password=${password}`
    }
    let result = await axios(option)
    let data = result.data
    res.status(200).send({message:data})
}







module.exports.getdata = getdata
module.exports.district = district
module.exports.weatherData = weatherData
module.exports.weathercities = weathercities
module.exports.meme=meme
