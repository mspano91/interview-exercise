// index.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("../server/src/routes/mainRouter");

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors("*"));

app.use(mainRouter);

app.listen(port, () => {
  console.log("port:4000 is working fine!");
});

module.exports = app;
