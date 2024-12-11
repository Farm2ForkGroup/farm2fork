const Product = require('../models/Product.model')
const CATEGORIES = require('../data/categories')
const mongoose = require('mongoose')
module.exports.list = (req, res, next) => {
  res.render('products/list')
}
module.exports.getDetail = (req, res, next) => {
  const { id } = req.params
  Product.findById(id)
    .then(product => {
      if (!product) {
        return next({ status: 404, message: 'Product not found' })
      }
      res.render('products/detail', { product })
    })
    .catch(error => next(error))
}
module.exports.create = (req, res, next) => {
  res.render('products/form', { categories: CATEGORIES })
}
module.exports.doCreate = (req, res, next) => {

  req.body.owner = req.currentUser.id
  
  req.body.categories = [
    {
      category: req.body.category,
      subcategories: req.body.subcategories
    }
  ]
 
  console.log( req.body)
  if (req.files) {
    console.log('hay files?', req.files)
    req.body.images = req.files.map(file => file.path)
  }

  Product.create(req.body)
    .then((productCreated) => {
       console.log('redirijo? ->', `/products/${productCreated.id}`)
      res.redirect(`/products/${productCreated.id}`)
    })
    .catch(err => {
      if (err instanceof mongoose.Error.ValidationError) {
        console.log('VALIDATION ERROR', err)
       next(err )
      } else {
        console.log('SERVER ERROR', err)
        next(err)
      }
    })
}






