const { Player, History, Favorite } = require('../models')


exports.get = () => {}

exports.list = async () => {
  const g = await Player.findByPk(1)

  return g
}

exports.getUserid = async (uid) => {
  const user = await Player.findOne(
    {
      where : {
        uid
      },
      include: [{model:History, as: 'History', required: false},
      {model:Favorite, as: 'Favorite', required: false}
    ],

    }
  )

  return user

}

exports.createContentBestUser = async (id, password)=> {
  const newUser = await Player.create({
    id, 
    password, 
    name:id,
    nick:id,
    registerSite: 'contentbest'
  })

  return newUser

}

