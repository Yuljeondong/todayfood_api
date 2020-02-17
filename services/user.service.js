const { Player, History, Favorite, Food } = require('../models')


exports.get = () => { }

exports.list = async () => {
  const g = await Player.findByPk(1)

  return g
}

exports.getUserid = async (uid) => {
  const user = await Player.findOne(
    {
      where: {
        uid
      },
      include: [{ model: History,include: { model: Food, as: 'food',where: {fid: 3}, required: false,}, as: 'historyList', required: false },
      { model: Favorite, as: 'favorList', required: false }
      ],

    }
  )

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

