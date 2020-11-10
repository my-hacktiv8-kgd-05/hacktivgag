const { Category, Meme } = require('../models')

class CategoriesController {
    static getAllCategories(req, res) {
        Category.findAll({ include: Meme })
            .then( categories => {
                res.render('showAllCategories', { categories })
            })
            .catch( err => {
                res.render('fatalError', { err })
            })
    } // * Release 6 ( show all category and show how many memes each category have ) Done
}

module.exports = CategoriesController