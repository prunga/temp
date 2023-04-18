const path = require('path')
//console.log(path.sep);

const filepath=path.join('./const','test.txt','subfolder')

//console.log(filepath);

const base=path.basename(filepath)
//console.log(base);

const absolute=path.resolve(__dirname,'./const','test.txt','subfolder')
console.log(absolute);