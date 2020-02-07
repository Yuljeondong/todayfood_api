const Router = require('koa-router')
const controller = require('./history.controller')

const router = new Router()


router.get('/:hid', controller.getUserHistory)

module.exports = router
