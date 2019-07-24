const express = require("express");
const router = express.Router();
const { requireSignIn, isAdmin, isAuth } = require("../controllers/auth");
const {
  create,
  categoryById,
  read,
  remove,
  list,
  update
} = require("../controllers/category");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", read);
router.post("/category/create/:userId", requireSignIn, isAdmin, isAuth, create);
router.put(
  "/category/:categoryId/:userId",
  requireSignIn,
  isAdmin,
  isAuth,
  update
);
router.delete(
  "/category/:categoryId/:userId",
  requireSignIn,
  isAdmin,
  isAuth,
  remove
);
router.get("/categories", list);

router.param("userId", userById);
router.param("categoryId", categoryById);
module.exports = router;
