const mongoose = require('mongoose')
const History = mongoose.model('ys_history', new mongoose.Schema({
  fid: 'string',
  food: 'object',
  date: 'string',
  uid: 'string'
}))
module.exports = History