const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.KEY;
const URL = `https://api.polygon.io/v3/reference/tickers?active=true&apiKey=${API_KEY}`;
const URL_byName = `https://api.polygon.io/v2/aggs/ticker/`;
// const URL_byName = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`;

const tickerController = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    throw new Error("error fetching");
  }
};

const byNameController = async (name) => {
  try {
    const response = await axios.get(
      `${URL_byName}${name}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error("error fetching");
  }
};

module.exports = { tickerController, byNameController };

// t: Este campo representa el timestamp (marca de tiempo) en formato UNIX, que indica cuándo se registró la información.
// v: Es el volumen de operaciones asociado con el precio en ese momento.
// o: El precio de apertura del par de divisas en el momento dado.
// c: El precio de cierre del par de divisas en el momento dado.
// h: El precio más alto alcanzado durante el intervalo de tiempo especificado.
// l: El precio más bajo alcanzado durante el intervalo de tiempo especificado.
// n: El número de operaciones realizadas durante el intervalo de tiempo especificado.
//vw: Volumen ponderado por precio
