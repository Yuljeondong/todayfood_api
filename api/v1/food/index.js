const Router = require('koa-router')
const controller = require('./food.controller')

const router = new Router()

router.get('/fid/:fid', controller.getFoodInfo)

router.get('/all', controller.getAllFoodInfo)
router.get('/setThumb', controller.setFoodThumb)
router.get('/tags', controller.getAllFoodTags)
router.post('/cbf', controller.getContestBasedFlitering)
router.get('/getvector', controller.getVectors)

module.exports = router
