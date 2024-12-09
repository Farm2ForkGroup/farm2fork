const moongose = require('mongoose')
const CATEGORIES = require('../data/categories')
const REQUIRED_FIELD = 'Campo requerido'
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, REQUIRED_FIELD]
    },
    description: {
      type: String,
      required: [true, REQUIRED_FIELD]
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, REQUIRED_FIELD],
      ref: 'User'
    },
    price: {
      type: Number,
      required: [true, REQUIRED_FIELD],
    },
    images: {
      type: [String],
      required: [true, REQUIRED_FIELD],
    },
    
    unit: {
        type: String,
        required: [true, REQUIRED_FIELD],
        enum: ['Kilograms', 'Liters', 'Units', 'Others'],
        default: 'Units'
    },

    categories : {
      type: [string],
      enum: [CATEGORIES],
    }
      
  },
  {
    timestamps: true
  }
)
const Product = mongoose.model('Product', productSchema)
module.exports = Product