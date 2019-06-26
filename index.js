const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const server = express();

console.log(process.env.PORT);

// mongoose
//   .connect(`${process.env.DB_CONFIG}`, {
//     useNewUrlParser: true
//   })
//   .then(() => {
//     console.log("Ayyyyye Database is hooked up!!!");
//   })
//   .catch(err => console.error(err));

server.get("/", (req, res) => {
  res.send("hello from node");
});

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`<----(:-Your server has started on ${port}-:)------>`);
});
