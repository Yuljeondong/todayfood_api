
// const bcrypt = require('bcrypt')
// const AuthService = require('../lib/token_auth')
// // https://jestjs.io/docs/en/using-matchers
 
// // test('auth test', async () => {   
// //     const exist = await AuthService.isUsedRefreshToken('aa')
// //     expect(exist).toBe(false)
// // })

// // test('auth test', async () => {   
// //     const exist = await AuthService.addUsedRefreshToken('aa')
// //     expect(exist).not.toBeNull()
// // })
// jest.setTimeout(30000)


// test('auth pw test', async () => {   
//     const saltRounds = 10
//     const myPlaintextPassword = '22'
//     const pw = await bcrypt.hash(myPlaintextPassword, saltRounds)
//     const match = await bcrypt.compare( myPlaintextPassword, pw)
//     console.log(pw)
//     console.log(match)
//     expect(match).toBeTruthy()
// })
