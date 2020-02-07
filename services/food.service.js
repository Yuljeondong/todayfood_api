const db = require('../models')

exports.getFoodInfo = async (fid) => {
  const food = await db.Food.findOne({
    where: {
      fid,
    },
    include: [
      {
        model: db.Player,
        through: {
          attributes: ['uid', 'name'],
          where: {},
        },
      },
    ],
  })

  return food
}

