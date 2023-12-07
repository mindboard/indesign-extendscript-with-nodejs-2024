require('extendscript-es5-shim')
const _ = require('./node_modules/underscore/underscore-node.cjs')
const console = require('./modules/console.js')
const myind = require('./modules/myind.js')
const ioutils = require('./modules/ioutils.js')
const story = require('./modules/story.js')
const style = require('./modules/style.js')

const doc = myind.createDocument({
    pageWidth: '210mm',
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

// json ファイルの読み込み
const datasourceDir = ioutils.getCurrentDir($).fullName + '/datasource'
const jsonFile = File(datasourceDir + '/dummy.json')
const jsonObject = ioutils.toJsonObject(JSON, jsonFile)

// データソースから画像/タイトル/テキストをそれぞれ取得
const item = jsonObject.list[0]
const imageFile = File(datasourceDir + '/' + item.image)
const title = item.title
const description = item.description

// 画像の挿入
graphicFrame.place(imageFile)
graphicFrame.fit(FitOptions.FRAME_TO_CONTENT)
graphicFrame.move([0,0])

// テキストの回り込み設定
const pref = graphicFrame.textWrapPreferences
pref.textWrapMode = TextWrapModes.BOUNDING_BOX_TEXT_WRAP
pref.textWrapOffset = ['0mm', '0mm', '2mm', '2mm'] // top, left, bottom, right

// テキストの挿入
story.getInsertionPoint(textFrame).contents = title
story.addBr(textFrame)
story.getInsertionPoint(textFrame).contents = description

// 段落スタイルの追加
const titlePSParams = style.createTitlePSParams(app, 'Arial\tRegular', 'title18', 18)
const titlePS = doc.paragraphStyles.add(titlePSParams)
const titlePSinsertionPoint = textFrame.insertionPoints[0]
titlePSinsertionPoint.applyParagraphStyle(titlePS)
