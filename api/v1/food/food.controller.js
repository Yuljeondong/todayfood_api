const foodService = require('../../../services/food.service')



exports.getFoodInfo = async (ctx) => {
  const {fid} = ctx.params
  const foodInfo = await foodService.getFoodInfo(fid)

  ctx.body = foodInfo
}

exports.setFoodThumb = async (ctx) => {
  const foodInfo = await foodService.setFoodThumb()

  ctx.body = foodInfo
}

exports.getAllFoodInfo = async (ctx) => {
  const foodInfo = await foodService.getAllFoodInfo()

  ctx.body = foodInfo
}

exports.getAllFoodTags = async (ctx) => {
  const foodTags = await foodService.getFoodVectors()
  ctx.body = foodTags
}
exports.getContestBasedFlitering = async (ctx) => {
  const {uid} = ctx.request.body
  const result = await foodService.getContestBasedFlitering(uid)
  ctx.body = result
}

exports.getVectors = async (ctx) => {
  const result = await foodService.getFoodVectors()
  ctx.body = result
}


exports.getRecommendList = async (ctx) => {
  const recommend = await foodService.getRecommend();

  ctx.body = recommend
}

exports.create = (ctx) => {
  ctx.body = 'created'
}

exports.delete = async (ctx) => {
  ctx.body = 'delete'
}

exports.replace = (ctx) => {
  ctx.body = 'replaced'
}

exports.update = (ctx) => {
  ctx.body = 'updated'
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// /**
//  * 선장 리스트 데이터 조회
//  */
// exports.getCaptainList = async (ctx) => {
//   const { appid } = ctx.params
//   // console.log('getCaptainList', appid);

//   ctx.body = await UserService.getCaptainList(appid)
// }


// /**
//  * 아이디로 선장 데이터 조회
//  */
// exports.getCaptainById = async (ctx) => {
//   const { appid } = ctx.params
//   // const { uid } = ctx.params
//   // console.log('getCaptainById', appid, uid);

//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account)

//   ctx.body = await UserService.getCaptainById(appid, account.id)
// }


// /**
//  * 아이디로 사용자 데이터 조회
//  */
// exports.getUserById = async (ctx) => {
//   // const {userid} = ctx.state.user
//   // validation.empty(userid)

//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account)
  
//   ctx.body = await UserService.getUserById(account.id)
// }


// /**
//  * 푸시토큰 업데이트
//  */
// exports.updatePushToken = async (ctx) => {
  
//   // const {userid} = ctx.state.user
//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account)

//   const {push_token} = ctx.request.body

//   const result = await UserService.updatePushToken(account.id, push_token)
//   ctx.status = 200
//   ctx.body = '푸시토큰 저장 완료'
// }

// /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// /**
//  * 나의 예약 내역 조회
//  * http://127.0.0.1:12111/api/users/1/reservation?appid=1&userid=1
//  */
// exports.getReservationList = async (ctx) => {
//   const {appid} = ctx.params
//   // const userid = ctx.params.uid
//   // validation.empty(userid)
//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account)

//   const list = await ReservationService.reservationList(appid, account.id)
//   ctx.body = list
// }


// /**
//  * 미사용 예약내역 조회
//  * http://127.0.0.1:12111/api/users/1/reservation?appid=1&userid=1
//  */
// exports.getActiveReservationList = async (ctx) => {
//   const {appid} = ctx.params
//   // const userid = ctx.state.user.userid
//   // validation.empty(userid)
//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account)

//   const list = await ReservationService.activeReservationList(appid, account.id)
//   ctx.body = list
// }

// /**
//  * 내소식 가져오기
//  */
// exports.getMyNews = async (ctx) => {

//   const {appid} = ctx.params
//   // const {userid} = ctx.state.user
//   // validation.empty(userid)
//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account.id)

//   const list = await MyNewsService.getMyNews(appid, account.id)
//   ctx.body = list
// }


// /**
//  * 내소식 건수 가져오기
//  */
// exports.getMyNewsCount = async (ctx) => {

//   const {appid} = ctx.params
//   // const {userid} = ctx.state.user
//   // validation.empty(userid)
//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account)

//   const list = await MyNewsService.getMyNewsCount(appid, account.id)
//   ctx.body = list
// }

// /**
//  * 내소식 읽음 처리
//  */
// exports.readMyNews = async (ctx) => {
  
//   const {appid} = ctx.params
//   // const {userid} = ctx.state.user
//   // validation.empty(userid)
//   const phoneNo = ctx.state.user.user_name
//   const account = await AccountService.getAccountByPhoneNo(phoneNo)
//   validation.empty(account)

//   await MyNewsService.readMyNews(appid, account.id)
// }