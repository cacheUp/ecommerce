const User = require("../models/user");
const braintree = require("braintree");
require("dotenv").config();

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: proccess.env.BRAINTREE_PUBLIC_KEY,
  privateKey: proccess.env.BRAINTREE_PRIVATE_KEY
});

exports.generateToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};
