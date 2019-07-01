const express = require("express");
const router = express.Router();
const { requireSignIn, isAdmin, isAuth } = require("../controllers/auth");
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories
} = require("../controllers/product");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignIn, isAdmin, isAuth, create);

router.delete(
  "/product/:productId/:userId",
  requireSignIn,
  isAdmin,
  isAuth,
  remove
);

router.put(
  "/product/:productId/:userId",
  requireSignIn,
  isAdmin,
  isAuth,
  update
);

router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.get("/products", list);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
