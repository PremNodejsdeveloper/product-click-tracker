const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/index.js");

const app = express();
app.use(bodyParser.json());
app.use("/api", routes);

module.exports = app;
