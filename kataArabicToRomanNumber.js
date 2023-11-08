/**
 * 
 * @param {Number} number
 * @returns {String} 
 */
function convertArabicNumberToRomanNumber(number){
    table = ["I","V","X","L","C","D","M"];

    const num = String(number);
    let roman = "";
    let j = 0;
    for (let i = num.length-1; i >= 0; i--) {
        let romanChar = "";
        const char = num.charAt(i);
        switch (char) {
            case "0":
                romanChar = "";
                break;
            case "1":
                romanChar = table[j];
                break;
            case "2":
                romanChar = table[j] + table[j];
                break;
            case "3":
                romanChar = table[j] + table[j] + table[j];
                break;
            case "4":
                romanChar = table[j] + table[j+1];
                break;
            case "5":
                romanChar = table[j+1];
                break;
            case "6":
                romanChar = table[j+1] + table[j];
                break;
            case "7":
                romanChar = table[j+1] + table[j] + table[j];
                break;
            case "8":
                romanChar = table[j+1] + table[j] + table[j] + table[j];
                break;
            case "9":
                romanChar = table[j] + table[j+2];
                break;
            }
        roman = romanChar + roman;
        j+= 2;
    }
    return roman;
}

module.exports = {
    convertArabicNumberToRomanNumber
}