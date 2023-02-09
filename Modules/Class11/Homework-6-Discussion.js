
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
// code

const arr = str1.toLowerCase().split(' ');

// titleCaseStr1 = titleCaseStr1 + arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + ' ';

// titleCaseStr1 = titleCaseStr1 + arr[1].charAt(0).toUpperCase() + arr[1].slice(1) + ' ';

// titleCaseStr1 = titleCaseStr1 + arr[2].charAt(0).toUpperCase() + arr[2].slice(1) + ' ';

// titleCaseStr1 = titleCaseStr1 + arr[lastIndex].charAt(0).toUpperCase() + arr[lastIndex].slice(1) + ' ';

// i=0,1,2,3,...,lastIndex      i++     i<=lastIndex


for (let i=0 ; i<= arr.length-1 ; i++) {
    titleCaseStr1 = titleCaseStr1 + arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
}


console.log(str1);                  // 'YOu ONlY lIVe ONcE'
console.log(titleCaseStr1);         // 'You Only Live Once'

/*

    'All the very best'     ->      'All The Very Best'

    'all the very best'

    arr = ['all', 'the', 'very', 'best']

    arr[0]
        get index-0 value in arr[0] (Uppercase) + get value from index-1 to end
            A + ll
            All
    titleCaseStr1 = titleCaseStr1 + 'All' + ' '     // '' + 'All' + ' ' = 'All '

    arr[1]
        get index-0 value in arr[1] (Uppercase) + get value from index-1 to end
            T + he
            The
    titleCaseStr1 = titleCaseStr1  + 'The' + ' '    // 'All ' + 'The' + ' ' = 'All The '

*/



























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
const str2 = 'hello dear how are you doing';
let reverseStr2 = '';           // final answer must be in the variable
// code
console.log(str2);              // 'hello dear how are you doing'
console.log(reverseStr2);       // 'doing you are how dear hello'


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
const arr3 = [1, 1, 1, 2, 3, 1, 2];
let avg;                // final answer must be in the variable
// code
console.log(arr3);      // [1, 1, 1, 2, 3, 1, 2]
console.log(avg);       // 1.57


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
// code
console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']