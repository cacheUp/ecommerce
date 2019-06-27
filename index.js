const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const server = express();

const userRoutes = require("./routes/user");

console.log(process.env.PORT);

mongoose
  .connect(`${process.env.DB_CONFIG}`, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Ayyyyye Database is hooked up!!!");
  })
  .catch(err => console.error(err));

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(userRoutes);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`<----(:-Your server has started on ${port}-:)------>`);
});
