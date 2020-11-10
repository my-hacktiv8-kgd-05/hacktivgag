const router = require('express').Router()
const Controller = require('../controllers/app-controller')
const CategoriesRouter = require('./categories')
const MemesRouter = require('./memes')

// * Home Router
router.get('/', Controller.getAllPublishedMemes)

// * Categories Router
router.use('/categories', CategoriesRouter)

// * Memes Router
router.use('/memes', MemesRouter)

module.exports = router