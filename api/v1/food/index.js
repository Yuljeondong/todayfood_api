const Router = require('koa-router')
const controller = require('./food.controller')

const router = new Router()

router.get('/:fid', controller.getFoodInfo)

router.get('/', controller.getRecommendList)

module.exports = router
