const {
  tickerController,
  byNameController,
  byDateController,
} = require("../controllers/controllers");

const tickerHandlerAll = async (req, res) => {
  try {
    const data = await tickerController();
    const tickerList = data.map((stock) => ({
      name: stock.T,
      close: stock.c,
      openP: stock.o,
      higherP: stock.h,
      lowerP: stock.l,
      trans: stock.n,
      timestamp: stock.t,
      tradingV: stock.v,
      volWeighted: stock.vw,
    }));
    return res.status(200).json(tickerList);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const tickerByName_Handler = async (req, res) => {
  const { n } = req.query;
  try {
    const data = await byNameController(n);
    // console.log(data);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const tickerByName_date = async (req, res) => {
  const { n, range } = req.query;
  try {
    const data = await byDateController(n, range);
    return res.status(200).json(data.results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { tickerHandlerAll, tickerByName_Handler, tickerByName_date };
