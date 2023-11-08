const {convertArabicNumberToRomanNumber} = require('../../kataArabicToRomanNumber')

const computeConversion = (data)=>{
    const res = convertArabicNumberToRomanNumber(data)
    return res
}

module.exports = {
    computeConversion,
}