require('extendscript-es5-shim')
const _ = require('./node_modules/underscore/underscore-node.cjs')
const console = require('./modules/console.js')

const prefixes = ['Hello', 'Goodbye']
const names = ['Taro', 'Hanako']

const greetings = _.flatten( _.map(prefixes, (prefix)=> {
    return _.map(names, (name)=> {
        return `${prefix}, ${name}!`
    })
}))

console.log(greetings)
