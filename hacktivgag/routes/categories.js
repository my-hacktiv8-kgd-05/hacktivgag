const router = require('express').Router()
const CategoriesController = require('../controllers/category-controller')

router.get('/', CategoriesController.getAllCategories)

module.exports = router