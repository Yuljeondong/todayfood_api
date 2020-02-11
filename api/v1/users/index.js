const Router = require('koa-router')
const controller = require('./users.controller')

const router = new Router()

router.get('/:uid', controller.getUserInfo)
router.delete('/:uid/history/:hid')

module.exports = router
