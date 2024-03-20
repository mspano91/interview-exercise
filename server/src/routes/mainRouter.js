const { Router } = require("express");
const {
  tickerHandlerAll,
  tickerByName_Handler,
} = require("../handlers/handlers");

const mainRouter = Router();

mainRouter.get("/ticker", tickerHandlerAll);
mainRouter.get("/ticker/byName", tickerByName_Handler);

module.exports = mainRouter;
