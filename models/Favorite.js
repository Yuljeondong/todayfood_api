const mongoose = require('mongoose')
const Favorite = mongoose.model('ys_user_favorite', new mongoose.Schema({
  uid: 'string',
  fid: 'string'
}))
module.exports = Favorite