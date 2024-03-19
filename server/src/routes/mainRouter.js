const { Router } = require("express");
const { tickerHandlerAll } = require("../handlers/handlers");

const mainRouter = Router();

mainRouter.get("/ticker", tickerHandlerAll);

module.exports = mainRouter;
