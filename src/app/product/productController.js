// business/controllers/productController.js - Business logic
const productService = require("./productService.js");

exports.trackClick = async (req, res) => {
  try {
    const { product_id } = req.body;
    if (!product_id) {
      return res.status(400).json({ error: "Product ID is required" });
    }
    const clicks = await productService.trackClick(product_id);
    res.json({ message: "Click tracked", product_id, clicks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClickCount = async (req, res) => {
  try {
    const { product_id } = req.params;
    const clicks = await productService.getClickCount(product_id);
    res.json({ product_id, clicks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
