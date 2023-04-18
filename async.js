const {readFileSync,writeFileSync}=require('fs')
console.log('start');
const first=readFileSync('/home/paigerunga/node/subfolder/first.txt','utf8')
 const second = readFileSync('./subfolder/second.txt','utf-8',)


 writeFileSync('./subfolder/resulter.txt','hello world')
console.log('done with task');
console.log('start new task');