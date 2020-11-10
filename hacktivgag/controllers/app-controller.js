const { Meme, Category } = require('../models')
const Helper = require('../helpers/helper')

class Controller {
    static getAllPublishedMemes(req, res) {
        Meme.findAll({ include: Category, where: { status: 'Published' }, order: [['createdAt', 'DESC']] })
            .then( memes => {
                res.render('showAllMemes', { memes, Helper })
            })
            .catch( err => {
                res.render('fatalError', { err })
            })
    } // * Release 7 ( img, caption, category, published, action, dataSortbyLastAdded ) Done
}

module.exports = Controller