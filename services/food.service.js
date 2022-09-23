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


exports.getRecommend = async () => {
  var recommend = new Array();
  const foods = await db.Food.findAll({
  })
  var count = foods.length;

  for (i = 0; i < 3; i++) {
    var randNo = getRandomInt(0, count - 1)
    recommend.push(foods[randNo].fid)
    foods.splice(randNo,1)
    count = foods.length
  }


  const food = await db.Food.findAll({
    where: {
      fid: recommend,
    }
  })
  return food
}

function getRandomInt(min, max) { //min ~ max 사이의 임의의 정수 반환
  return Math.floor(Math.random() * (max - min)) + min;
}
