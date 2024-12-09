const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')
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
    }
,
   

    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: [
          {
            category: 'Fruits',
            subcategories: [
              'Oranges',
              'Lemons',
              'Cherries',
              'Figs',
              'Pomegranates',
              'Grapes'
            ],
          },
          {
            category: 'Vegetables',
            subcategories: [
              'Leafy greens',
              'Root vegetables',
              'Cruciferous',
              'Peppers',
              'Tomatoes',
              'Artichokes'
            ],
          },
          {
            category: 'Meat',
            subcategories: [
              'Beef',
              'Pork',
              'Chicken',
              'Lamb',
              'Turkey',
              'Rabbit'
            ],
          },
          {
            category: 'Dairy',
            subcategories: [
              'Cheese',
              'Milk',
              'Yogurt',
              'Butter',
              'Custards'
            ],
          },
          {
            category: 'Olive oil',
            subcategories: [
              'Arbequina',
              'Picual',
              'Hojiblanca',
              'Cornicabra',
              'Blended oils'
            ],
          },
          {
            category: 'Wines',
            subcategories: [
              'Red',
              'White',
              'Rosé',
              'Sparkling',
              'Sherry',
              'Dessert wines'
            ],
          },
          {
            category: 'Cereals',
            subcategories: [
              'Rice',
              'Wheat',
              'Barley',
              'Oats',
              'Maize'
            ],
          },
          {
            category: 'Tubers',
            subcategories: [
              'Potatoes',
              'Sweet potatoes',
              'Cassava'
            ],
          },
        ],
      },
    
    unit: {
        type: String,
        required: [true, REQUIRED_FIELD],
        enum: ['Kilograms', 'Liters', 'Units', 'Others'],
        default: 'Units'
    },
      
  },
  {
    timestamps: true
  }
)
const Product = mongoose.model('Product', productSchema)
module.exports = Product