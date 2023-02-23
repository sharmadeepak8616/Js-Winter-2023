

let num = 10;
/*
    scope of num-variable is the entire file
    num-variable can be access from anywhere in the file
*/
let result = 'lucky';       // scope: 8-entireFile

let myResult;

if (num >= 10) {
    myResult = 'Awesome'
    let result = 'Happy';   // scope: 10-16
    /*
        scope of result-variable is the if-block
        result-variable can be access within the if-block
    */
    console.log(result);
}

console.log(result);

console.log(myResult);


let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];
console.log(arr5);      // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
for (let X=0 ; X<=arr5.length-1 ; X++) {    // scope of X-variable is withint for-loop
    arr5[X] = arr5[X].toUpperCase();
}

function getAbbreviation(inputStr) {
    let abbr = '';
    const arr = inputStr.toUpperCase().split(' ');
    for (const word of arr) {
        abbr = abbr + word.charAt(0);
    }
    return abbr;
}