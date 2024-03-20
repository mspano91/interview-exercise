const {
  tickerController,
  byNameController,
} = require("../controllers/controllers");

const tickerHandlerAll = async (req, res) => {
  try {
    const data = await tickerController();
    const tickerList = data.map((tick) => ({
      ticker: tick.ticker,
      name: tick.name,
      market: tick.market,
      locale: tick.locale,
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

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { tickerHandlerAll, tickerByName_Handler };
