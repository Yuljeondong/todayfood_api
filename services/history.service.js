const { History } = require('../models')

exports.getHistoryInfo = async (hid) => {
  const history = await History.findOne(
    {
      where : {
        hid
      }
    }
  )

  return history

}


