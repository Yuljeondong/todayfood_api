const Router = require('koa-router')
const controller = require('./history.controller')

const router = new Router()


router.get('/:hid', controller.getUserHistory)
router.delete('/:hid', controller.delUserHistory)
module.exports = router
