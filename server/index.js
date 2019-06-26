const express = require("express");
const server = express();
require("dotenv").config();

server.get("/", (req, res) => {
  res.send("hello from node");
});

const port = process.env.PORT || 6969;

server.listen(port, () => {
  console.log(`<----(:-Your server has started on ${port}-:)------>`);
});
