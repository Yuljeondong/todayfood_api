const { Food } = require('../models')

exports.getFoodInfo = async (fid) => {
  const food = await Food.findOne(
    {
      where : {
        fid
      }
    }
  )

  return food

}


