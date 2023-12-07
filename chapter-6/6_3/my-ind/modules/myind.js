const myind = {}

myind.createDocument = (params)=>{
    const docParams = {}
    docParams.documentPreferences = {
        pageWidth   : params.pageWidth,
        pageHeight  : params.pageHeight,
        facingPages : false}

    const doc = app.documents.add(docParams)
    doc.cjkGridPreferences.showAllLayoutGrids = false

    const page = doc.pages.item(0)
    page.marginPreferences.properties = {
        top    : '0mm',
        left   : '0mm',
        bottom : '0mm',
        right  : '0mm'}

    return doc
}

myind.createTextFrame = (page, params)=>{
    const textFrameParams = {}
    textFrameParams.geometricBounds = [
        params.top,
        params.left,
        params.bottom,
        params.right]
    const textFrame = page.textFrames.add(textFrameParams)
    return textFrame
}

module.exports = myind