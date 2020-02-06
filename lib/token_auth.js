

const cryptoRandomString = require('crypto-random-string')
const jsonwebtoken = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

const koaJwt = require('koa-jwt')
const appconfig = require('../config/appconfig')
const { ModelError } = require('./errors')


// const publicKey = fs.readFileSync(`${__dirname   }/public.pub`);

const jwtChecker = koaJwt({ secret: appconfig.gwt.SECRET })

// const Auth = require('../models/auth.model')
// const User = require('../models/user.model')


// JWT 토큰 생성 함수
exports.signAccessToken = (user) => {
  return jsonwebtoken.sign(
    {
      userid: user.no,
      iss: appconfig.gwt.ISSUER,
      // aud: appconfig.gwt.AUDIENCE,
      
    },
    appconfig.gwt.SECRET,
    { expiresIn: appconfig.gwt.EXPIRES },
  )
}

exports.signRefreshToken = (user) => {
  const randomeWord = cryptoRandomString(10)
  return jsonwebtoken.sign(
    {
      userid: user.id,
      key: randomeWord,
      iss: appconfig.gwt.ISSUER,
      aud: appconfig.gwt.AUDIENCE,
    },
    appconfig.gwt.REFRESH_SECRET,
    { expiresIn: appconfig.gwt.REFRESH_EXPIRES },
  )
}

exports.isUsedRefreshToken = async (refreshToken) => {
  // check refreshToken is valide
  // check already used

  const result = {}// await Auth.isUsedRefreshToken(refreshToken)
  return result
}

exports.addUsedRefreshToken = async (refreshToken) => {
  // check refreshToken is valide
  // check already used
  const result = {}// await Auth.addUsedRefreshToken(refreshToken)
  return result
}

exports.isAuthenticated = async (ctx, next) => {
  await jwtChecker(ctx, next)
}

