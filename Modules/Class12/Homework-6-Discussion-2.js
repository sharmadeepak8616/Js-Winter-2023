
// Due date: Feb-9 (Eod)

/**
 * Q1:
 * Convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
const str1 = 'qUEen';
let titleCaseStr1 = '';             // final answer must be in the variable
const arr = str1.toLowerCase().split(' ');
for (let i=0 ; i<= arr.length-1 ; i++) {
    titleCaseStr1 = titleCaseStr1 + arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
}
console.log(str1);                  // 'YOu ONlY lIVe ONcE'
console.log(titleCaseStr1);         // 'You Only Live Once'

/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> 'doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
const str2 = 'have a great day';
let reverseStr2 = '';           // final answer must be in the variable

const arr2 = str2.split(' ');

for (let m=arr2.length-1 ; m>=0 ; m--) {
    reverseStr2 = reverseStr2 + arr2[m] + " ";
}
console.log('\nQ2\n');
console.log(str2);              // 'hello dear how are you doing'
console.log(reverseStr2);       // 'doing you are how dear hello'

/**
 * Solution-2:
 */

const arr22 = str2.split(' ');
const reverseStr22 = arr22.reverse().join(' ');
console.log(reverseStr22);

/**
 * Q3:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
const arr3 = [1, -1];
let avg;                // final answer must be in the variable
let total = 0;
// code

for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;
console.log('\nQ3\n');
console.log(arr3);      // [1, 1, 1, 2, 3, 1, 2]
console.log(avg);       // 1.57

const num1 = [1, 2, 3, 4, 5];
for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;


const num2 = [1, 1, 1, 2, 3, 1, 2];
for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;


const num3 = [1, -1];
for (let d=0 ; d <= arr3.length-1 ; d++) {
    total = total + arr3[d];
}
avg = total/arr3.length;



/**
 * Q4:
 * Create abbreviation for a given sentence.
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'gooD mORNIng' -> 'GM'
 * 'aPPlE bANAna chErRY' -> 'ABC'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
 * 'qUEen' -> 'Q'
 */
const str4 = 'aPPlE bANAna chErRY';
let abbr = '';              // final answer must be in the variable
// code
console.log(str4);          // 'apple banana cherry'
console.log(abbr);          // ABC

/**
 * Q5:
 * Convert all string values in the given array into Uppercase
 * 
 * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
 * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
 * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
 * 
 * 
 * Note: final answer must be in the SAME variable (arr5)
 */
let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];
console.log(arr5);      // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
/*
    arr5[0] = arr5[0].toUpperCase()
    arr5[1] = arr5[1].toUpperCase()
    arr5[2] = arr5[2].toUpperCase()
    arr5[3] = arr5[3].toUpperCase()
    ...
    ...
    arr5[last] = arr5[last].toUpperCase()  


    arr5[X] = [X].toUpperCase()         X=0,1,2,3,...,lastIndex     X++     X<=lastIndex
*/

for (let X=0 ; X<=arr5.length-1 ; X++) {
    arr5[X] = arr5[X].toUpperCase();
}

console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']