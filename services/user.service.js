// const { Player, History, Favorite, Food } = require('../models')
const md5 = require('md5')
const Player = require('../models/Player')
const Favorite = require('../models/Favorite')
const History = require('../models/History')
const Food = require('../models/Food')

exports.get = () => { }

exports.getUserInfobyId = async (uid) => {
  const user = await Player.findById(uid, { password: 0, created_at: 0, updated_at: 0 })

  const favorList = await Favorite.find({ uid: user.id })
  user.favorList = [...favorList]
  for await (const favor of favorList) {
    const food = await Food.findById(favor.fid)
    favor.food = food
  }
  const historyList = await History.find({ uid: user.id }).sort({ date: -1 })
  for await (const history of historyList) {
    const food = await Food.findById(history.fid)
    history.food = food
  }
  user.historyList = [...historyList]



  return user
}

exports.getUserInfo = async (loginId, password) => {
  const md5Password = md5(password)
  const user = await Player.findOne({ loginId, password: md5Password }, { password: 0, created_at: 0, updated_at: 0 })
  if (user === null || user.loginId !== loginId) {
    return user
  }

  return user
}


exports.makeUser = async (loginId, password, name) => {
  const md5Password = md5(password)
  var now = new Date()
  const user = await Player.insertMany({ loginId, password: md5Password, name, created_at: now.toISOString(), updated_at: now.toISOString() })

  return user
}