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

const doc = myind.createDocument({
    pageWidth: '210',
    pageHeight: '210mm'
})

const page = doc.pages.item(0)

const graphicFrame = myind.createTextFrame(page, {
    left: '0mm',
    top: '0mm',
    right: '30mm',
    bottom: '30mm'
})
graphicFrame.contentType = ContentType.graphicType

const textFrame = myind.createTextFrame(page, {
    left: '0mm',
    top: '0mm',
    right: '210mm',
    bottom: '210mm'
})

// データソースから画像/タイトル/テキストをそれぞれ取得
const item = jsonObject.list[0]
const imageFile = File(datasourceDir + '/' + item.image)
const title = item.title
const description = item.description

// 画像の挿入
graphicFrame.place(imageFile)
graphicFrame.fit(FitOptions.FRAME_TO_CONTENT)
graphicFrame.move([0,0])

const pref = graphicFrame.textWrapPreferences
pref.textWrapMode = TextWrapModes.BOUNDING_BOX_TEXT_WRAP
pref.textWrapOffset = ['0mm', '0mm', '2mm', '2mm']

// テキストの挿入
const story = textFrame.parentStory

// タイトル
const insertionPoint0 = story.insertionPoints[-1]
insertionPoint0.contents = title

// 改行
const insertionPoint1 = story.insertionPoints[-1]
insertionPoint1.contents = "\r"

// 説明
const insertionPoint2 = story.insertionPoints[-1]
insertionPoint2.contents = description


// 段落スタイルの作成
const fontName = 'Arial\tRegular'
const font = app.fonts.itemByName(fontName)
const titlePSParams = {
    name: 'title18',
    appliedFont: font,
    pointSize: 18
}
const titlePS = doc.paragraphStyles.add(titlePSParams)

// 段落スタイルの適用
const titlePSinsertionPoint = textFrame.insertionPoints[0]
titlePSinsertionPoint.applyParagraphStyle(titlePS)
