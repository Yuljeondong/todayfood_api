const History = require('../models/History')
const Food = require('../models/Food')
// exports.getUserHistory = async (uid) => {
//   const userHistory = await History.findAll({
//     where: {
//       uid
//     },
//     include: { model: Food, as: 'food',required: true }
//   })

//   return userHistory
// }
exports.getUserHistory = async (uid) => {
  const userHistory = await History.find({ uid: uid })

  return userHistory
}
exports.inputUserHistory = async (uid, fid) => {
  var now = new Date()
  const result = await History.insertMany({
    fid: fid,
    uid: uid,
    date: now.toISOString()
  })
  await Food.findByIdAndUpdate(fid, { $inc: { popularity: 1 } })
  return result
}


exports.delUserHistory = async (hid) => {
  const userHistory = await History.findByIdAndDelete(hid)
  
  // findAll({
  //   where: {
  //     uid
  //   },
  //   include: { model: Food, as: 'food', required: true }
  // })
  //return userHistory
}