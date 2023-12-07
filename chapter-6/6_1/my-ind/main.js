const console = require('./modules/console.js')

const params = {}

params.documentPreferences = {
    pageWidth   : '50mm',
    pageHeight  : '50mm',
    facingPages : false}

const doc = app.documents.add(params)
doc.cjkGridPreferences.showAllLayoutGrids = false

const page = doc.pages.item(0)
page.marginPreferences.properties = {
    top    : '0mm',
    left   : '0mm',
    bottom : '0mm',
    right  : '0mm'}

console.log(doc)