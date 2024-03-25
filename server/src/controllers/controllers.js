const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.KEY;
const URLTICKERS = `https://api.polygon.io/v3/reference/tickers?active=true&apiKey=${API_KEY}`;
const URLCRIPTO = `https://api.polygon.io/v1/open-close/crypto/BTC/USD/2023-01-09?adjusted=true&apiKey=${API_KEY}`;
const URLSTOCKS = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=${API_KEY}`;
const URL_byName = `https://api.polygon.io/v2/aggs/ticker/`;
// const URL_byName = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`;

const tickerController = async () => {
  try {
    const response = await axios.get(URLSTOCKS);
    return response.data.results;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("error fetching");
  }
};

const byNameController = async (name) => {
  try {
    const response = await axios.get(
      `${URL_byName}${name}/range/1/day/2023-01-01/2023-03-01?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("error fetching");
  }
};

const byDateController = async (name, range) => {
  try {
    const response = await axios.get(
      `${URL_byName}${name}/range/1/day/${range}?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("error fetching");
  }
};

module.exports = { tickerController, byNameController, byDateController };
