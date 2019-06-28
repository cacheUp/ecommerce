const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignIn
} = require("../controllers/auth");
const { userSignUpValidator } = require("../validator");

router.post("/signup", userSignUpValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/hello", requireSignIn, (req, res) => {
  res.send("hello there");
});

module.exports = router;
