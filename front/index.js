function convertArabicNumberToRomanNumber(number){
    let table = ["I","V","X","L","C","D","M"];

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
  console.log(roman)
    return roman;
}

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

function handleSubmitArabeToRomain(event) {
    event.preventDefault(); 
    let nombre = document.getElementById("nombre").value;
    let result = convertArabicNumberToRomanNumber(nombre)
    document.getElementById('resultAtoR').innerHTML = result 
}

function handleSubmitRomainToArabe(event) {
    event.preventDefault(); 
    let nombre = document.getElementById("nombre2").value;
    let result = convertRomanNumberToArabicNumber(nombre)
    document.getElementById('resultRtoA').innerHTML = result 
}

function handleSubmitArabeToRomainRest(event){
    event.preventDefault()
    let nombre = document.getElementById("nombre4").value;
    let url = "http://162.19.65.178:3000/converterArabicToRoman"
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nombre)
      };

    fetch(url,options)
      .then(res => res.json())
      .then(data => document.getElementById('resultRtoA_REST').innerHTML = data.res)
}

document.getElementById("monFormulaireAtoR").addEventListener("submit", handleSubmitArabeToRomain);

document.getElementById("monFormulaireRtoA").addEventListener("submit", handleSubmitRomainToArabe);

document.getElementById("monFormulaireAtoR_REST").addEventListener("submit", handleSubmitArabeToRomainRest);

