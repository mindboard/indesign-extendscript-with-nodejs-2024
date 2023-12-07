require('extendscript-es5-shim')
const console = require('./modules/console.js')

const jsondata = '{"hello": "world", "list": [1, 2, 3, 4, 5]}'
const obj = JSON.parse(jsondata)
console.log(obj)

const jsondata2 = JSON.stringify(obj)
console.log(jsondata2)