const myind = require('./myind.js')
const story = require('./story.js')

const layout = {}

layout.placeItem = (page, item, datasourceDir, params, titlePS)=>{

    const graphicFrame = myind.createTextFrame(page, {
        left: `${params.left}mm`,
        top: `${params.top}mm`,
        right: `${(params.left + 30)}mm`,
        bottom: `${(params.top + 30)}mm`
    })
    graphicFrame.contentType = ContentType.graphicType

    const textFrame = myind.createTextFrame(page, {
        left: `${params.left}mm`,
        top: `${params.top}mm`,
        right: `${params.right}mm`,
        bottom: `${params.bottom}mm`
    })

    // データソースから画像/タイトル/テキストをそれぞれ取得
    const imageFile = File(datasourceDir + '/' + item.image)
    const title = item.title
    const description = item.description

    // 画像の挿入
    graphicFrame.place(imageFile)
    graphicFrame.fit(FitOptions.FRAME_TO_CONTENT)
    graphicFrame.move([params.left, params.top])

    // テキストの回り込み設定
    const pref = graphicFrame.textWrapPreferences
    pref.textWrapMode = TextWrapModes.BOUNDING_BOX_TEXT_WRAP
    pref.textWrapOffset = ['0mm', '0mm', '2mm', '2mm'] // top, left, bottom, right

    // テキストの挿入
    story.getInsertionPoint(textFrame).contents = title
    story.addBr(textFrame)
    story.getInsertionPoint(textFrame).contents = description

    // 段落スタイルの追加
    const titlePSinsertionPoint = textFrame.insertionPoints[0]
    titlePSinsertionPoint.applyParagraphStyle(titlePS)
}

module.exports = layout