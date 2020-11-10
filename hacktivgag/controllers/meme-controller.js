const { Meme, Category } = require('../models')
const Helper = require('../helpers/helper')

class MemesController {
    // * Release 0, 1, 2, 3 Done
    static getAddMemeForm(req, res) {
        const errMsg = req.query.errorMsg
        Category.findAll()
            .then( categories => {
                res.render('memes/add', { errMsg, categories })
            })
            .catch( err => {
                res.render('fatalError', { err })
            })
    } // * Release 4 ( add form, dropdown Category from database ) Done

    static postAddMemeForm(req, res) {
        const newMeme = {
            author: req.body.author,
            title: req.body.title,
            imageURL: req.body.imageURL,
            CategoryId: req.body.CategoryId
        }
        Meme.create(newMeme)
            .then( () => {
                res.redirect('/')
            })
            .catch( err => {
                let errMsg = []
                err.errors.forEach( errorMsg => {
                    errMsg.push(errorMsg.message)
                })
                errMsg = errMsg.join(', ')
                res.redirect(`/memes/add?errorMsg=${errMsg}`)
            })
    } // * Release 5 ( all format should notEmpty, imageURL should be an URL format, send errMsg if not validated, create hooks status Published ) Done

    static getReportMemeById(req, res) {
        const id = +req.params.id
        Meme.update({ status: 'Reported'}, { where: { id } })
            .then( () => {
                res.redirect('/memes/reported')
            })
            .catch( err => {
                res.render('fatalError', { err })
            })
    } // * Release 8 ( change status to Reported and redirect to /memes/reported ) Done

    static getAllReportedMemes(req, res) {
        Meme.findAll({ include: Category, where: { status: 'Reported' }})
            .then( memes => {
                res.render('showAllReportedMemes', { memes, Helper })
            })
            .catch( err => {
                res.render('fatalError', { err })
            })
    } // * Release 9 ( show all memes where status == Reported, add Delete column ) Done

    static getDeleteMemeById(req, res) {
        const id = +req.params.id
        Meme.destroy({ where: { id } })
            .then( () => {
                res.redirect('/memes/reported')
            })
            .catch( err => {
                res.render('fatalError', { err })
            })
    } // * Release 10 ( delete meme by id from db and redirect to /memes/reported ) Done
}

module.exports = MemesController