const { History,Food } = require('../models')




exports.getUserHistory = async(uid) => {
  const userHistory = await History.findAll({
    where: {
      uid
    },
    include: {model:Food, as: 'food', required: true}
  })

  return  userHistory
}

