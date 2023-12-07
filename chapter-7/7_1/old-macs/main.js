require('extendscript-es5-shim')
const _ = require('./node_modules/underscore/underscore-node.cjs')
const console = require('./modules/console.js')
const myind = require('./modules/myind.js')

const readText = (file)=>{
    file.encoding = 'UTF-8'
    const handle = file.open('r')
    if( handle ){
        const text = file.read()
        file.close()
        return text
    }
    return '{}'
}

const currentDir = File($.fileName).parent
const datasourceDir = currentDir.fullName + '/datasource'
const jsonFile = File(datasourceDir+ '/dummy.json')

const jsonText = readText(jsonFile)
const jsonObject = JSON.parse(jsonText)
const titleList = _.map( jsonObject.list, (item)=>{
    return item.title
})

console.log(titleList)