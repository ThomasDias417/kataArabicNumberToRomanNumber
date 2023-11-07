 function convertArabicNumberToRomanNumber(number){
    const equivalence = ['I','II','III','IV','V','VI','VII','VIII','IX','X']
    
    const rank = ['','L','C','D','M']
    return equivalence[number-1]
}

module.exports = {
    convertArabicNumberToRomanNumber
}