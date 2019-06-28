const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { requireSignIn } = require("../controllers/auth");

router.param("userId", userById);
router.get("/secret/:userId", requireSignIn, (req, res) => {
  res.json({ user: req.profile });
});

module.exports = router;
