const Router = require('koa-router')
const controller = require('./users.controller')

const router = new Router()

router.get('/:uid', controller.getUserInfo)
router.post('/:uid/food/:fid/date/:date', controller.inputUserHistory)
router.delete('/:uid/history/:hid')

module.exports = router
