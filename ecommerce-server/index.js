const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const server = express();
const expressValidater = require("express-validator");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const braintreeRoutes = require("./routes/braintree");

console.log(process.env.PORT);
//
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
server.use(expressValidater());
server.use(cors());
server.use("/api", authRoutes);
server.use("/api", userRoutes);
server.use("/api", categoryRoutes);
server.use("/api", productRoutes);
server.use("/api", braintreeRoutes);
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`<----(:-Your server has started on ${port}-:)------>`);
});
