/* eslint-disable no-console */
const Koa = require('koa')
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const passport = require('koa-passport')
// var koaJwt = require('koa-jwt')

const app = new Koa()
const router = new Router()
const models = require("./models")




// v1 추가
const users = require('./api/v1/users')
const history = require('./api/v1/history')
const food = require('./api/v1/food')
//---------------------------------------------------------


app.use(cors());
app.use(passport.initialize())
// app.use(koaJwt({ secret: appconfig.gwt.SECRET}))
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())





// /**
//  * 에러 핸들러
//  */
// app.use(async function handleErrors(ctx, next) {
//   try {
//     await next()
//   } catch (err) {
//     ctx.response.status = err.status || 500
//     switch (ctx.response.status) {
//       case 204: // No Content
//         break
//       case 401: // Unauthorized
//         ctx.response.set('WWW-Authenticate', 'Basic')
//         break
//       case 400: // 추가
//       case 403: // Forbidden
//       case 404: // Not Found
//       case 406: // Not Acceptable
//       case 409: // Conflict
//         ctx.response.body = { message: err.message, root: 'error' }
//         break
//       default:
//       case 500: // Internal Server Error (for uncaught or programming errors)
//         console.error(ctx.response.status, err.message)
//         ctx.response.body = { message: err.message, root: 'error' }
//         if (app.env !== 'production') ctx.response.body.stack = err.stack
//         // ctx.app.emit('error', err, ctx) // github.com/koajs/koa/wiki/Error-Handling
//         break
//     }
//     await Log.error(ctx, err)
//     console.log('err', err)
//   }
// })



// v1 추가

router.use('/api/v1/users', users.routes())

router.use('/api/v1/food', food.routes())

router.use('/api/v1/history', history.routes())

models.sequelize.sync().then(() => {
  app.listen(53255, () => {
    console.log('Coincore Apiserver on port : 53255')
  })
}).catch((err) => {
  console.log(`Coincore Apiserver starting error : ${  err}`)
});


