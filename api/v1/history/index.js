const Router = require('koa-router')
const controller = require('./history.controller')

const router = new Router()


router.get('/:hid', controller.getUserHistory)
router.delete('/rmHist', controller.delUserHistory)
router.post('/input', controller.inputUserHistory)
module.exports = router
