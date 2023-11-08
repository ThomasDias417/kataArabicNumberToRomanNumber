const {convertRomanNumberToArabicNumber} = require('../../kataRomainToArabic')

const computeConversion = (data)=>{
    const res = convertRomanNumberToArabicNumber(data)
    return res
}

module.exports = {
    computeConversion
}