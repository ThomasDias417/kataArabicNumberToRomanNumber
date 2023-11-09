const {convertArabicNumberToRomanNumber} = require('../../kataArabicToRomanNumber')

const computeConvertion = (data)=>{
    const res = convertArabicNumberToRomanNumber(data)
    return res
}

const computeBundleConvertion = ()=>{
    const res = {
        "1"     : convertArabicNumberToRomanNumber(1),
        "3"     : convertArabicNumberToRomanNumber(3),
        "5"     : convertArabicNumberToRomanNumber(5),
        "7"     : convertArabicNumberToRomanNumber(7),
        "10"    : convertArabicNumberToRomanNumber(10),
        "15"    : convertArabicNumberToRomanNumber(15),
        "44"    : convertArabicNumberToRomanNumber(44),
        "878"   : convertArabicNumberToRomanNumber(878),
        "3729"  : convertArabicNumberToRomanNumber(3729),
    }
    return res
}

module.exports = {
    computeConvertion,
    computeBundleConvertion
}