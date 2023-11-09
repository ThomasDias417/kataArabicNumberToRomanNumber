const {convertRomanNumberToArabicNumber} = require('../../kataRomainToArabic')

const computeConvertion = (data)=>{
    const res = convertRomanNumberToArabicNumber(data)
    return res
}

module.exports = {
    computeConvertion
}