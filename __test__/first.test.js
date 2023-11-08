
const {convertArabicNumberToRomanNumber} = require('../kataArabicToRomanNumber.js')
const {convertRomanNumberToArabicNumber} = require('../kataRomainToArabic.js')

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

test('convert 11 to XI',()=>{
    expect(convertArabicNumberToRomanNumber(11)).toEqual('XI')
})

test('convert 15 to XV',()=>{
    expect(convertArabicNumberToRomanNumber(15)).toEqual('XV')
})

test('convert 19 to XIX',()=>{
    expect(convertArabicNumberToRomanNumber(19)).toEqual('XIX')
})

test('convert 44 to XLIV',()=>{
    expect(convertArabicNumberToRomanNumber(44)).toEqual('XLIV')
})

test('convert 878 to DCCCLXXVIII',()=>{
    expect(convertArabicNumberToRomanNumber(878)).toEqual('DCCCLXXVIII')
})

test('convert 3729 to MMMDCCXXIX',()=>{
    expect(convertArabicNumberToRomanNumber(3729)).toEqual('MMMDCCXXIX')
})

test('convert I to 1',()=>{
    expect(convertRomanNumberToArabicNumber('I')).toEqual(1)
})

test('convert V to 5',()=>{
    expect(convertRomanNumberToArabicNumber('V')).toEqual(5)
})

test('convert CCCXXI to 321',()=>{
    expect(convertRomanNumberToArabicNumber('CCCXXI')).toEqual(321)
})

test('convert MMMCCXIII to 3213',()=>{
    expect(convertRomanNumberToArabicNumber('MMMCCXIII')).toEqual(3213)
})