// const { Player, History, Favorite, Food } = require('../models')
const Player = require('../models/Player')

exports.get = () => { }

exports.list = async () => {
  const g = await Player.findByPk(1)

  return g
}

exports.getUserid = async (uid) => {
  const user = await Player.findOne({ name: uid })

  return user
}

exports.createContentBestUser = async (id, password) => {
  const newUser = await Player.create({
    id,
    password,
    name: id,
    nick: id,
    registerSite: 'contentbest'
  })

  return newUser

}

