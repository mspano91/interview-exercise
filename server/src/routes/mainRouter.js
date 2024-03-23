const { Router } = require("express");
const {
  tickerHandlerAll,
  tickerByName_Handler,
  tickerByName_date,
} = require("../handlers/handlers");

const mainRouter = Router();

mainRouter.get("/ticker", tickerHandlerAll);
mainRouter.get("/ticker/byName", tickerByName_Handler);
mainRouter.get("/ticker/byDate", tickerByName_date);

module.exports = mainRouter;
