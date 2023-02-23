/**
 * Array:
 *      which can store one or more values
 *      technically, is an object
 *      represent by []
 * 
 * functions:
 *      Array-Concept-1.js
 *              length (property)
 *              []
 *      Array-Concept-2.js
 *              toString()
 *              join()
 *              pop()
 *              shift()
 *              push()
 *              unshift()
 *              splice()
 *              concat()
 *              includes()
 *              indexOf()
 *              lastIndexOf()
 *              isArray()
 *              reverse()
 *              fill()
 *      Array-Concept-4.js
 *              map()
 *              filter()
 *              every()
 *              find()
 *              findIndex()
 * 
 */

let words = ['hApPY', 'gIFt', 'laUGh', 'leARn', 'GrOW', 'coNNecT'];
let sports = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer', 'saTuRn', 'uraNUs'];
let numbers = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];

/**
 * When we want to perform action on ALL the values of array
 * function: map()
 * 
 * map() returns a NEW array of same-length as the input-array after performing action on every value of the array
 * Note: map() does NOT change the original array
 */

/**
 * Convert all values of array into uppercase, and store the result in new-array
 */
/*
    resultArr = []

    resultArr.push([0].toUpperCase())
    resultArr.push([1].toUpperCase())
    resultArr.push([2].toUpperCase())
    ...
    ...
    resultArr.push([last].toUpperCase())

    ['hApPY', 'gIFt', 'laUGh']
    resultArr = ['HAPPY', 'GIFT', 'LAUGH']

*/

const inputArr = ['hApPY', 'gIFt', 'laUGh'];
let resultArr = [];
for (let i=0 ; i <= inputArr.length-1 ; i++) {
    resultArr.push(inputArr[i].toUpperCase());
}

let resultArr2 = [];
for (const word of inputArr) {
    resultArr2.push(word.toUpperCase());
}

let resultArr3 = inputArr.map(m => m.toUpperCase());

console.log(inputArr);
console.log(resultArr);
console.log(resultArr2);
console.log(resultArr3);

/**
 * When we need to filter values from array into a NEW-array based on condition(s)
 * function: filter()
 * 
 * filter() returns a NEW array with value statisfying specified condition(s)
 * Note: filter() does NOT change the original array
 */

/**
 * Create code to get the ALL the values from array which contains 'u' (ignoring cases)
 * 
 * let arr = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer', 'saTuRn', 'uraNUs'];
 *           ['meRCUrY', 'VeNUs', 'JUPiTer', 'saTuRn', 'uraNUs']
 */
console.log('\n\nfilter()\n');
let arr = ['hApPY', 'gIFt', 'laUGh', 'leARn', 'GrOW', 'coNNecT'];
let wordsContainU = [];
for (let N=0 ; N <= arr.length-1 ; N++) {
    if (arr[N].toLowerCase().includes('u')) {
        wordsContainU.push(arr[N]);
    }
}

let wordsContainU2 = [];
for (const word of arr) {
    if (word.toLowerCase().includes('u')) {
        wordsContainU2.push(word);
    }
}

let wordsContainU3 = arr.filter(word => word.toLowerCase().includes('u'));
/*
    let wordsContainU2 = [];
    for (const word of arr) {
        if (word.toLowerCase().includes('u')) {
            wordsContainU2.push(word);
        }
    }
    let wordsContainU3 = wordsContainU2;
*/

console.log(arr);
console.log(wordsContainU);
console.log(wordsContainU2);
console.log(wordsContainU3);

/**
 * When we need to find if ALL values of array satisfy specified condition(s)
 * function: every()
 * 
 * if all values of array pass the specified condition(s)
 *      function returns true
 * otherwise
 *      function returns false
 * 
 */
// const numbers = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];
/**
 * Find if all values of the numbers-array are even
 * let isAllEven = true;
 * 
 * if [0]%2 !== 0
 *      isAllEven = false
 *      stop the checking further
 * 
 * if [1]%2 !== 0
 *      isAllEven = false
 *      stop the checking further
 * 
 * if [2]%2 === 0
 *      isAllEven = false
 *      stop the checking further
 * 
 * ...
 * ...
 * 
 * if [last]%2 === 0
 *      isAllEven = false
 *      stop the checking further
 * 
 * 
 * 
 * 
 * if [X]%2 !== 0                       X=0,1,2,3,...,last  ;   X<=last ;   X++
 *      stop the checking further
 * 
 */
numbers = [90, 66, 22, 10, 42, 68];
console.log('\n\nevery()\n');
let isAllEven = true;
for (let X=0 ; X <= numbers.length-1 ; X++) {
    if (numbers[X]%2 !== 0) {
        isAllEven = false;
        break;
    }
}

let isAllEven2 = true;
for (let num of numbers) {
    if (num%2 !== 0) {
        isAllEven2 = false;
        break;
    }
}

let isAllEven3 = numbers.every(x => x%2 === 0);
/*
    let isAllEven2 = true;
    for (let num of numbers) {
        if (num%2 !== 0) {
            isAllEven2 = false;
            break;
        }
    }
    let isAllEven3 = isAllEven2;
*/

console.log(numbers);
console.log(isAllEven);
console.log(isAllEven2);
console.log(isAllEven3);

/**
 * When we need to find the first-array value which satisfy the specified condition(s)
 * function: find()
 * 
 * if an array-element is found which statisfy the specified condition
 *      function returns the array-element
 * otherwise
 *      function returns undefined
 * 
 * 
 * Note: function returns the FIRST array-element which statisfy the specified condition(s)
 */

numbers = [90, 66, 22, 10, 42, 68];
/**
 * Find the first number in the array which is divisible by 11
 * 
 * let ans = 0;
 * 
 * if (numbers[0]%11 === 0)
 *      ans = numbers[0]
 *      stop checking further
 *
 * if (numbers[1]%11 === 0)
 *      ans = numbers[1]
 *      stop checking further
 * 
 * if (numbers[2]%11 === 0)
 *      ans = numbers[2]
 *      stop checking further
 * ...
 * ...
 * if (numbers[last]%11 === 0)
 *      ans = numbers[last]
 *      stop checking further
 * 
 * 
 * if (numbers[Q]%11 === 0)         // Q=0,1,2,3,...,last   Q<=last     Q++
 *      ans = numbers[Q]
 *      stop checking further
 * 
 */
console.log('\n\nfind()\n');
let firstNumDivisibleBy11;
numbers = [90, 65, 1, 10, 42, 68];
for (let Q=0 ; Q<=numbers.length-1 ; Q++) {
    if (numbers[Q]%11 === 0) {
        firstNumDivisibleBy11 = numbers[Q];
        break;
    }
}
let firstNumDivisibleBy11_2;
for (const num of numbers) {
    if (num%11 === 0) {
        firstNumDivisibleBy11_2 = num;
        break;
    }
}

let firstNumDivisibleBy11_3 = numbers.find(n => n%11 === 0);
/*
    let firstNumDivisibleBy11_2;
    for (const num of numbers) {
        if (num%11 === 0) {
            firstNumDivisibleBy11_2 = num;
            break;
        }
    }
    let firstNumDivisibleBy11_3 = firstNumDivisibleBy11_2
*/


console.log(numbers);
console.log(firstNumDivisibleBy11);
console.log(firstNumDivisibleBy11_2);
console.log(firstNumDivisibleBy11_3);

/**
 * When we need to find the first-index at which array value satisfy the specified condition(s)
 * function: findIndex()
 * 
 * if an array-element is found which statisfy the specified condition
 *      function returns the index of the array-element
 * otherwise
 *      function returns -1
 * 
 * 
 * Note: function returns the FIRST index at which array-element statisfies the specified condition(s)
 */
console.log('\n\nfindIndex()\n');
numbers = [90, 23, 12, 10, 42, 68];

let firstIndexDivisibleBy11 = -1;
numbers = [90, 65, 11, 10, 42, 68];
for (let Q=0 ; Q<=numbers.length-1 ; Q++) {
    if (numbers[Q]%11 === 0) {
        firstIndexDivisibleBy11 = Q;
        break;
    }
}
/*
    let firstIndexDivisibleBy11;
    for (let Q=0 ; Q<=numbers.length-1 ; Q++) {
        if (numbers[Q]%11 === 0) {
            firstIndexDivisibleBy11 = Q;
            break;
        }
    }
    let firstIndexDivisibleBy11_3 = firstIndexDivisibleBy11
*/

let firstIndexDivisibleBy11_3 = numbers.findIndex(n => n%11 === 0);

console.log(numbers);
console.log(firstIndexDivisibleBy11);
console.log(firstIndexDivisibleBy11_3);