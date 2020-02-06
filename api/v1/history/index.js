const Router = require('koa-router')
const controller = require('./history.controller')

const router = new Router()

// router.get('/', controller.list)
router.get('/:hid', controller.getHistoryInfo)

module.exports = router
