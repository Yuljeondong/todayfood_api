const { History, Food } = require('../models')




exports.getUserHistory = async (uid) => {
  const userHistory = await History.findAll({
    where: {
      uid
    },
    include: { model: Food, as: 'food', required: true }
  })

  return userHistory
}



exports.delUserHistory = async (hid) => {
  const userHistory = await History.destroy({
    where:{
      hid
    },
  })
  // findAll({
  //   where: {
  //     uid
  //   },
  //   include: { model: Food, as: 'food', required: true }
  // })
  //return userHistory
}