const console = require('./modules/console.js')
const myind = require('./modules/myind.js')

const doc = myind.createDocument({
    pageWidth: '50mm',
    pageHeight: '50mm'
})
const page = doc.pages.item(0)
const textFrame = myind.createTextFrame(page, {
    left: '0mm',
    top: '0mm',
    right: '50mm',
    bottom: '50mm'
})
textFrame.contents = 'Hello, World!'

console.log(textFrame)