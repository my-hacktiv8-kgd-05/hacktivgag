const router = require('express').Router()
const MemesController = require('../controllers/meme-controller')

router.get('/add', MemesController.getAddMemeForm)

router.post('/add', MemesController.postAddMemeForm)

router.get('/:id/report', MemesController.getReportMemeById)

router.get('/reported', MemesController.getAllReportedMemes)

router.get('/:id/delete', MemesController.getDeleteMemeById)

module.exports = router