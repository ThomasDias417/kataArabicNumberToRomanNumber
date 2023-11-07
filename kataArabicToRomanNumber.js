/**
 * 
 * @param {Number} number
 * @returns {String} 
 */
function convertArabicNumberToRomanNumber(number){
    let numberString = String(number);
    
    const decimalsTable = ['I', 'X','C','M'];
    const fivesTable= ['V','L','D'];
    
    let result = "";

    // index to loop number string from start to end
    let indexNumberString = 0;

    for (let i = numberString.length - 1; i >= 0; i--) {
        const zeroToNineTable = {
            "0": "",
            "1": decimalsTable[i],
            "2": decimalsTable[i] + decimalsTable[i],
            "3": decimalsTable[i] + decimalsTable[i] + decimalsTable[i],
            "4": decimalsTable[i] + fivesTable[i],
            "5": fivesTable[i],
            "6": fivesTable[i] + decimalsTable[i],
            "7": fivesTable[i] + decimalsTable[i] + decimalsTable[i],
            "8": fivesTable[i] + decimalsTable[i] + decimalsTable[i] + decimalsTable[i],
            "9": decimalsTable[i] + decimalsTable[i+1]
        }

        let numeral = numberString[indexNumberString];

        let romanNumeral = zeroToNineTable[numeral];

        result = result + romanNumeral;
        indexNumberString++;
    }

    return result
}

convertArabicNumberToRomanNumber(10)

module.exports = {
    convertArabicNumberToRomanNumber
}