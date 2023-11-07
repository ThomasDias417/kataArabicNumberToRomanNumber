 function convertArabicNumberToRomanNumber(number){
    let numStr = String(number)

    if(numStr.length == 0){
        return ''
    }

    if(numStr === '0'){
        return ''
    }

    const rank5 = ['V','L','D']
    const rank10 = ['X','C','M']
    const equivalence = ['I','II','III','IV',rank5[0],'VI','VII','VIII','IX',rank10[0]]

    if(numStr.length == 1){
        return equivalence[number-1]
    }
    
}

module.exports = {
    convertArabicNumberToRomanNumber
}