const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.KEY;
const URL = `https://api.polygon.io/v3/reference/tickers?active=true&apiKey=${API_KEY}`;

const tickerController = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    throw new Error("error fetching");
  }
};

module.exports = { tickerController };

// t: Este campo representa el timestamp (marca de tiempo) en formato UNIX, que indica cuándo se registró la información.
// v: Es el volumen de operaciones asociado con el precio en ese momento.
// o: El precio de apertura del par de divisas en el momento dado.
// c: El precio de cierre del par de divisas en el momento dado.
// h: El precio más alto alcanzado durante el intervalo de tiempo especificado.
// l: El precio más bajo alcanzado durante el intervalo de tiempo especificado.
// n: El número de operaciones realizadas durante el intervalo de tiempo especificado.
//vw: Volumen ponderado por precio
