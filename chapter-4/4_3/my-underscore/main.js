require('extendscript-es5-shim')
const _ = require("./node_modules/underscore/underscore-node.cjs")
const console = require('./modules/console.js')

const names = ['Taro', 'Hanako']
const greetings = _.map(names, (name)=> {
    return `Hello, ${name}!`
})
console.log(greetings)
