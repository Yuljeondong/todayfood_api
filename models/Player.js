const mongoose = require('mongoose')
const Player = mongoose.model('ys_user_info', new mongoose.Schema({
  loginId: 'string',
  password: 'string',
  name: 'string',
  favorList: 'array',
  historyList: 'array',
  created_at: 'string',
  updated_at: 'string'
}))
module.exports = Player