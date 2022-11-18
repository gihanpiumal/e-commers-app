const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
var cors = require("cors");
const error = require("./src/services/error");

dotenv.config();
const app = express();
app.use(cors())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

process.env.TZ = "Asia/Colombo";
require("./src/startup/logging")()
require("./src/routes/route")(app)
app.use(error)
require("./src/startup/db")();

// listen for requests
app.listen(process.env.backEndPort, () => {
    console.log("Server is listening on port " + process.env.backEndPort);
  });

