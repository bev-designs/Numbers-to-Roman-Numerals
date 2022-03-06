# Numbers-to-Roman-Numerals

javascript numbers converter to roman numerals

** function convertToRoman(num) {
  let romanToNum = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }
  let romanStr = "";

  for( let key in romanToNum){
    // console.log('key: ',key)
    // console.log('value: ',romanToNum[key])
     // console.log(key)
    while(num >= romanToNum[key]) {
      romanStr += key;
      num -= romanToNum[key]
      console.log(num)
    }

  }
 return romanStr;
}

console.log(convertToRoman(798)); **
