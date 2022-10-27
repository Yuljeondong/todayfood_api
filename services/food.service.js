const Food = require('../models/Food')
const History = require('../models/History')
const axios = require('axios');
const cheerio = require('cheerio');

exports.getAllFoodInfo = async () => {
  const food = await Food.find()

  return food
}

exports.getFoodInfo = async (fid) => {
  const food = await Food.findById(fid)

  return food
}

exports.setFoodThumb = async () => {
  var uri = 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query='

  var foods = await Food.find({ $or: [{ thumb: null }, { thumb: { $exists: false } }] })
  await Promise.all(foods.map(async food => {
    var fullURI = encodeURI(uri + food.food_name)
    const resp = await axios.get(fullURI);

    const $ = cheerio.load(resp.data);
    var img = $("#main_pack section.sc_new.sp_nimage._prs_img._imageSearchPC div div.photo_group._listGrid div.photo_tile._grid div:nth-child(1) div div.thumb a img")
    var src = img.src
  }))

}

exports.getFoodVectors = async () => {
  var tagArray = Array();
  const foods = await (await Food.find())
  // 음식 태그데이터 정렬
  for await (const food of foods) {
    tagArray = new Set([...tagArray, ...food.food_tags])
  }
  tagArray = [...tagArray]
  var foodVectors = Array()


  // 태그데이터 기반 벡터화
  for await (const food of foods) {
    var foodVector = []


    await Promise.all(food.food_tags.map(async foodTag => {
      var i = 0
      await Promise.all(tagArray.map(async tag => {
        if (foodVector[i] == undefined) {
          foodVector[i] = 0
        }
        if (tag === foodTag) {
          foodVector[i] = 1
        }
        i++
      }))

    }))

    // for await (const tag of tagArray) {

    //   for await (const foodTag of food.food_tags) {
    //     if (foodVector[tag] == undefined) {
    //       foodVector[tag] = 0
    //     }
    //     if (tag === foodTag) {
    //       foodVector[tag] = 1
    //       break;
    //     }
    //   }
    // }
    foodVectors.push({ food, value: foodVector })
  }





  return foodVectors
}

exports.getContestBasedFlitering = async (uid) => {
  // 유저 히스토리중 음식 고르기
  var fid = "63551e507f4ddcfb3a4ee688"
  var recommendList = []
  const historyList = await History.find({ uid }).sort({ date: -1 })
  var counts = await Food.count()
  if (historyList.length === 0) { //히스토리 없을시 랜덤추천
    
    while (recommendList.length < 5) {
      var recommendFood = await Food.find().skip(getRandomInt(0, counts)).limit(1)
      recommendList = new Set([...recommendList, ...recommendFood])
      recommendList = [...recommendList]
    }

    return recommendList
  }
  // 히스토리 있을 시 최근 3개중 1개를 선택
  var historyCount = await History.count({ uid })
  var tempHistoryPick = getRandomInt(0, historyCount < 3 ? historyCount : 3)
  const recentFood = await History.find({ uid }).sort({ date: -1 }).skip(tempHistoryPick).limit(1)
  fid = recentFood[0].fid
  // 벡터화 데이터 불러오기
  const foodVectors = await this.getFoodVectors()


  var food = await Food.findById(fid)
  var targetVector = foodVectors.find(foodVector => foodVector.food.food_name === food.food_name)

  // 유사도 계산
  var simArray = []
  await Promise.all(foodVectors.map(async vector => {
    if (targetVector.food.food_name === vector.food.food_name) { // 자신과 비교 X
      var simResultObject = { food: targetVector.food, result: null }
      simArray.push(simResultObject)
      return false
    }
    var a = 0
    var b = 0
    var c = 0
    for (let i = 0; i < vector.value.length; i++) {
      a = a + targetVector.value[i] * vector.value[i]
      b = b + targetVector.value[i] * targetVector.value[i]
      c = c + vector.value[i] * vector.value[i]
    }
    simResult = a / (Math.sqrt(b) * Math.sqrt(c))

    // 결과 배열에 입력
    var simResultObject = { food: vector.food, result: simResult }
    simArray.push(simResultObject)

  }))
  // 유사한 정도로 sort
  simArray.sort((a, b) => a.food.food_name - b.food.food_name)
  simArray.sort((a, b) => b.food.popularity - a.food.popularity)
  simArray.sort((a, b) => b.result - a.result)
  /* simArray 예시
  [
      {
          "food": {
              "_id": "63551e507f4ddcfb3a4ee68c",
              "food_name": "홍어무침",
              "food_tags": [
                  "생채·무침류",
                  "한식",
                  "어류",
                  "홍어"
              ],
              "popularity": 0
          },
          "result": 0.75
      },
      {
          "food": {
              "_id": "63551e507f4ddcfb3a4ee689",
              "food_name": "회덮밥",
              "food_tags": [
                  "밥류",
                  "한식",
                  "일식",
                  "어류",
                  "회"
              ],
              "popularity": 0
          },
          "result": 0.6708203932499369
      }
  ]
  */
  // 상위 15개 중 3개 선택
  while (recommendList.length < 3) {
    var rand = getRandomInt(0, simArray.length >= 15 ? 15 : simArray.length)
    recommendList.push(simArray[rand].food)
    if (recommendList.length > 2) {
      recommendList = new Set(recommendList)
      recommendList = [...recommendList]
    }
  }
  while (recommendList.length < 5) {
    var recommendFood = await Food.find().skip(getRandomInt(0, counts)).limit(1)
    recommendList = new Set([...recommendList, ...recommendFood])
    recommendList = [...recommendList]
  }

  return recommendList

}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
// exports.getRecommend = async () => {
//   var recommend = new Array();
//   const foods = await db.Food.findAll({
//   })
//   var count = foods.length;

//   for (i = 0; i < 3; i++) {
//     var randNo = getRandomInt(0, count - 1)
//     recommend.push(foods[randNo].fid)
//     foods.splice(randNo,1)
//     count = foods.length
//   }


//   const food = await db.Food.findAll({
//     where: {
//       fid: recommend,
//     }
//   })
//   return food
// }

// function getRandomInt(min, max) { //min ~ max 사이의 임의의 정수 반환
//   return Math.floor(Math.random() * (max - min)) + min;
// }
