;

const name = require('./name.js')
const sayHi=require('./sayHi.js')
const data =require('./items.js')
require('./mind.js')

console.log(data);
sayHi('susan');
sayHi(name.john)
sayHi(name.peter)

console.log(name);






const os =require('os')

const user=os.userInfo()

console.log(user);


console.log(os.uptime());

const currentOs = {
    name:os.type(),
    release:os.release(),
    memory:os.totalmem(),
    freemomory:os.freemem()

}

console.log(currentOs);