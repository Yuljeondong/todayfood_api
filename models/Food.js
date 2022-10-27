const mongoose = require('mongoose')
const Food = mongoose.model('ys_food_info', new mongoose.Schema({
  food_name: 'string',
  thumb: 'string',
  food_tags: 'array',
  popularity: 'number'
}))
module.exports = Food