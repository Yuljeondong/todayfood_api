const Client = require('bitcoin-core');


const client = new Client({ 
    headers: true ,
    host:'54.180.83.64',
    network:'mainnet',
    username: 'hashkorea',
    password: 'Thugh4NaeFaej0Thaigie4hailDe2ui5Ohgh1Oo'

});
 
// Promise style with headers enabled:
client.getInfo().then(([body, headers]) => console.log(body, headers));
 
// Await style based on promises with headers enabled:
// const [body, headers] = await client.getInfo();