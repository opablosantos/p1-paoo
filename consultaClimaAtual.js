const axios = require ("axios")
require("dotenv").config()

const {
    URL_BASE2,
    LAT,
    LON,
    APPID,
    UNITS,
    IDIOMA
} = process.env

const url = `${URL_BASE2}?lat=${LAT}&lon=${LON}&appid=${APPID}&units=${UNITS}&lang=${IDIOMA}`

axios.get(url)
.then(res => {
    return res.data
})
.then(res => {
    console.log('Clima em %s: %s, com sensação térmica de %d°C', res.name, res.weather[0].description, res.main.feels_like)
    return res
})