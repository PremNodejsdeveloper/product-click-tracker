const express = require("express");
const router = express.Router();
const productController = require("../app/product/productController.js");

router.post("/track", productController.trackClick);
router.get("/clicks/:product_id", productController.getClickCount);

module.exports = router;
