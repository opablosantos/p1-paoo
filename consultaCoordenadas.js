const axios = require ("axios")
require("dotenv").config()

const {
    URL_BASE,
    CITY_NAME,
    APPID
} = process.env

const url = `${URL_BASE}?q=${CITY_NAME}&appid=${APPID}`

axios.get(url)
.then(res => {
    return res.data
})
.then(res => {
    console.log('Coordenadas de %s: Latitude: %d | Longitude: %d', res.city.name, res.city.coord.lat, res.city.coord.lon)
    return res
})