require('extendscript-es5-shim')
const _ = require('./node_modules/underscore/underscore-node.cjs')
const console = require('./modules/console.js')
const product = require('cartesian-product')

const prefixes = ['Hello', 'Goodbye']
const names = ['Taro', 'Hanako']

const greetings = product([prefixes, names]).map( (prefixAndName)=>{
    const prefix = prefixAndName[0]
    const name   = prefixAndName[1]
    return `${prefix}, ${name}!`
})
console.log(greetings)