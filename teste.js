// Importa a biblioteca axios para fazer solicitações HTTP
const axios = require("axios");
// Importa a biblioteca dotenv para carregar variáveis de ambiente do arquivo .env
require("dotenv").config();

// Extrai variáveis de ambiente do objeto process.env
const { URL_BASE2, LAT, LON, APPID, UNITS, IDIOMA } = process.env;

// Constrói a URL para a consulta do clima atual
const url = `${URL_BASE2}?lat=${LAT}&lon=${LON}&appid=${APPID}&units=${UNITS}&lang=${IDIOMA}`;

// Faz uma solicitação GET para a URL e trata a resposta
axios.get(url)
  .then(res => {
    return res.data;
  })
  .then(res => {
    // Exibe as informações do clima atual na saída
    console.log('Clima em %s: %s, com sensação térmica de %d°C', res.name, res.weather[0].description, res.main.feels_like);
    return res;
  });