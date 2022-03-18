function convertToRoman(num) {
    let number = document.querySelector('#number');
    let result = document.querySelector('#result');

    num = number.value
    let romanToNum = {  M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1   }
    let romanStr = "";
  
     for( let key in romanToNum){
        // console.log('key: ',key)
        // console.log('value: ',romanToNum[key])
        // console.log(key)
        while(num >= romanToNum[key]) {  
            romanStr += key;
            num -= romanToNum[key]
           // console.log(romanStr)
        }
     }
     result.innerHTML = romanStr;
     return romanStr;
  }
  
// reset button
let reset = document.querySelector('#reset');
let inputs = document.querySelectorAll('input');
let result = document.querySelectorAll('#result');

reset.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
    result.forEach(result => result.innerHTML = '')
    number.classList.remove('error-border')
    error.innerHTML = '';
    
});

let number = document.querySelector('#number');
let error = document.querySelector('#error');

// validate form input (number)
function numberIsValid(num) {
    let numRegex = /\d/;
    return numRegex.test(num);
}

// validation function
function validateForm() {

    clear();

    if (!numberIsValid(number.value)) {
        error.innerText = '** Enter a valid number **';
        number.classList.add('error-border');
    }
    if (number.value.length < 1) {
        error.innerText = '** Enter a number **';
        number.classList.add('error-border');  
    }
}

// clear error msg
function clear() {
    if (number.value.length >= 1 && numberIsValid(number.value)) {
        number.classList.remove('error-border')
        error.innerHTML = '';
    }
}
// brand paragraph styles
document.getElementById("by").style.color = 'white';
document.getElementById("by").style.fontSize = '.8rem';
document.getElementById("by").style.border = 'none';
document.getElementById("by").style.textAlign = 'center';