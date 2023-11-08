function convertRomanNumberToArabicNumber(valeur){
    var i, v, x, l, c, d, m;
    var nombres = [];
    let resultat = 0;

     for (var j = 0; j < valeur.length; j++) {
        switch (valeur[j]) {
        case "i":
        case "I":
            i = 1;
            nombres.push(i);
            break;
        case "v":
        case "V":
            v = 5;
            nombres.push(v);
            break;
        case "x":
        case "X":
            x = 10;
            nombres.push(x);
            break;
        case "l":
        case "L":
            l = 50;
            nombres.push(l);
            break;
        case "c":
        case "C":
            c = 100;
            nombres.push(c);
            break;
        case "d":
        case "D":
            d = 500;
            nombres.push(d);
            break;
        case "m":
        case "M":
            m = 1000;
            nombres.push(m);
            break;
        default:
           
            break;
        }
    }
  
  nombres.forEach((elem)=>{resultat += elem})
  console.log(resultat)
  return resultat
}

module.exports = {
    convertRomanNumberToArabicNumber
}