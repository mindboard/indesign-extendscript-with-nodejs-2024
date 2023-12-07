require('extendscript-es5-shim')
const _ = require('./node_modules/underscore/underscore-node.cjs')
const product = require('cartesian-product')
const console = require('./modules/console.js')
const myind = require('./modules/myind.js')
const ioutils = require('./modules/ioutils.js')
const story = require('./modules/story.js')
const style = require('./modules/style.js')
const layout = require('./modules/layout.js')


const pageWidth = 210
const pageHeight = 210

// ドキュメントとページの用意
const doc = myind.createDocument({
    pageWidth: `${pageWidth}mm`,
    pageHeight: `${pageHeight}mm`
})

const page = doc.pages.item(0)

// ４つのアイテム配置位置情報を生成
const itemWidth = pageWidth/2
const itemHeight = pageHeight/2

const leftList = [0, itemWidth]
const topList = [0, itemHeight]
const paramsList = product([leftList, topList]).map((topAndLeft)=>{
    const left = topAndLeft[0]
    const top  = topAndLeft[1]
    return {
        left: left,
        top: top,
        right: (left + itemWidth),
        bottom: (top + itemHeight)
    }
})

// json ファイルの読み込み
const datasourceDir = ioutils.getCurrentDir($).fullName + '/datasource'
//const jsonFile = File(datasourceDir + '/dummy.json')
const jsonFile = File(datasourceDir + '/example.json')
const jsonObject = ioutils.toJsonObject(JSON, jsonFile)

// 段落スタイルの用意
const titlePSParams = style.createTitlePSParams(app, 'Arial\tRegular', 'title18', 18)
const titlePS = doc.paragraphStyles.add(titlePSParams)

_.each( _.zip(jsonObject.list, paramsList), (itemAndParams)=>{
    const item   = itemAndParams[0]
    const params = itemAndParams[1]
    layout.placeItem(page, item, datasourceDir, params, titlePS)
})
