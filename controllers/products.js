const Product = require('../models/product')

const getAllProducts = async (req, res) => {
  res.send(`Get all produts`);
};

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true})
  res.status(200).json({products})
};

module.exports = { getAllProducts, getAllProductsStatic };
