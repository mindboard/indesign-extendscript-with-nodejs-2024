const ioutils = {}

ioutils.toJsonObject = (JSON, jsonFile)=>{
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

    const jsonText = readText(jsonFile)
    return JSON.parse(jsonText)
}

ioutils.getCurrentDir = ($)=>{
    return File($.fileName).parent
}

module.exports = ioutils