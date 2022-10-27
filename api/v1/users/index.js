const Router = require('koa-router')
const controller = require('./users.controller')

const router = new Router()

router.get('/uid/:uid', controller.getUserInfobyId)
router.post('/login', controller.getUserInfo)
router.post('/register', controller.makeUser)
router.delete('/:uid/history/:hid')

module.exports = router
