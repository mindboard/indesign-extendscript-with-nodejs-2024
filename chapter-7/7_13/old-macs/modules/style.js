const style = {}

style.createTitlePSParams = (app, fontName, psName, psPointSize)=>{
    const font = app.fonts.itemByName(fontName)
    if( font!=null ){
        return {
            name: psName,
            appliedFont: font,
            pointSize: psPointSize
        }
    } else {
        return {
            name: psName,
            appliedFont: app.fonts[0],
            pointSize: psPointSize
        }
    }
}

module.exports = style