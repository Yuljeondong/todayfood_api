
const orderService = require('../services/order.service')

// https://jestjs.io/docs/en/using-matchers
 
test('refund test', async () => {   
    const order = await orderService.refundOrder(11,'a','bb',100)
    expect(order).toBe({})
})

// test('boats test2', async () => {   
//     const boat = await BoatService.getBoat(1)
//     expect(boat).toBeDefined()
// })