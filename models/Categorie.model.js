const mongoose = require('mongoose');

const CATEGORIES = ['Fruit', 'Vegetable', 'Dairy', 'Meat', 'Grain']; // Replace with your categories

const productSchema = new mongoose.Schema({
  categories: [{
    category: {
      type: String,
      enum: CATEGORIES, // Apply enum validation here
      required: true
    },
    subcategories: {
      type: [String], // Array of strings for subcategories
      default: [] // Optional: provide a default value
    }
  }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
