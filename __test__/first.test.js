
const {convertArabicNumberToRomanNumber} = require('../kataArabicToRomanNumber.js')

test('convert 1 to I',()=>{
    expect(convertArabicNumberToRomanNumber(1)).toEqual('I')
})

test('convert 3 to III',()=>{
    expect(convertArabicNumberToRomanNumber(3)).toEqual('III')
})

test('convert 5 to V',()=>{
    expect(convertArabicNumberToRomanNumber(5)).toEqual('V')
})

test('convert 7 to VII',()=>{
    expect(convertArabicNumberToRomanNumber(7)).toEqual('VII')
})

test('convert 10 to X',()=>{
    expect(convertArabicNumberToRomanNumber(10)).toEqual('X')
})

// test('cumul opérande',()=>{
//     expect(convertArabicNumberToRomanNumber(12).toEqual('XII'))
// })