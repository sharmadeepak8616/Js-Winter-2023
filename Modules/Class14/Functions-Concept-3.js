/**
 * Functions
 *      set of code to perform a specifc task
 * 
 * Before we create a function:
 * 1. what is the purpose of the function?
 *      this helps in function name
 * 2. Do I need any input from user?
 *      If yes,
 *          a) how manay inputs we need from user?
 * 
 * 3. Should the function return any value back to user?
 *      If yes,
 *          make sure to write return statement as the last line in the function
 *      otherwise
 *          NO return statement in the function
 * 
 * 
 * 
 * Syntax to create a function:
 * 
 * #1:
 * function funcName(<inputParameters>) {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we are planning that function should return a vaule back to user (Q3); LAST LINE of the function.
 * }
 * 
 * funcName -> function-name (it should relate to the purpose of the function)
 * 
 * inputParameters -> Q2
 *      if we need input from user
 *          we need to create variable in the parenthesis
 *      else
 *          parenthesis will be empty
 * 
 * 
 * #2:  Function expression
 * let funcName = function(<inputParameters>) {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we are planning that function should return a vaule back to user (Q3); LAST LINE of the function.
 * }
 * 
 * 
 * #3:  Arrow Function
 * let funcName = (<inputParameters>) => {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we are planning that function should return a vaule back to user (Q3); LAST LINE of the function.
 * }
 * 
 * 
 */

/**
 * Create code to get all numbers in between 1-50 which are divisible by both 4 and 6.
 * 
 * 
 * Create code to get all numbers in between A-B which are divisible by both C and D.
 */
/*
    12, 24, 48
    final answer must be stored in an array (resultArr)

    X
    if (X%4===0 and X%6===0)
        add X in resultArr

    X=1,2,3,4,5,....,50

    for (let X=1 ; X <= 50 ; X++) {
        if (X%4===0 and X%6===0)
            add X in resultArr
    }

    resultArr must have the final answer
*/

// let resultArr = [];
// for (let X=1 ; X <= 50 ; X++) {
//     if (X%4===0 && X%6===0) {
//         resultArr.push(X);
//     }
// }

// console.log(resultArr);

/**
 * 1. what is the purpose of the function?
 *      getDivisibleNumbers
 * 2. Do I need any input from user? - Yes
 *      If yes,
 *          a) how many inputs we need from user? - rangeStart, rangeEnd, divNum1, divNum2
 * 3. Should the function return any value back to user? - Yes
 *      return resultArr
 *
 */

function getDivisibleNumbers(rangeStart, rangeEnd, divNum1, divNum2) {
    let resultArr = [];
    for (let X=rangeStart ; X <= rangeEnd ; X++) {
        if (X%divNum1===0 && X%divNum2===0) {
            resultArr.push(X);
        }
    }
    return resultArr;
}

console.log(getDivisibleNumbers(1, 50, 4, 6));      // [ 12, 24, 36, 48 ]
console.log(getDivisibleNumbers(21, 50, 4, 6));     // [ 24, 36, 48 ]
console.log(getDivisibleNumbers(1, 10, 3, 2));      // [6]

let getDivisibleNumbers2 = function (rangeStart, rangeEnd, divNum1, divNum2) {
    let resultArr = [];
    for (let X=rangeStart ; X <= rangeEnd ; X++) {
        if (X%divNum1===0 && X%divNum2===0) {
            resultArr.push(X);
        }
    }
    return resultArr;
}

console.log(getDivisibleNumbers2(1, 50, 4, 6));      // [ 12, 24, 36, 48 ]
console.log(getDivisibleNumbers2(21, 50, 4, 6));     // [ 24, 36, 48 ]
console.log(getDivisibleNumbers2(1, 10, 3, 2));      // [6]
console.log(typeof getDivisibleNumbers2);           // function


let getDivisibleNumbers3 = (rangeStart, rangeEnd, divNum1, divNum2) => {
    let resultArr = [];
    for (let X=rangeStart ; X <= rangeEnd ; X++) {
        if (X%divNum1===0 && X%divNum2===0) {
            resultArr.push(X);
        }
    }
    return resultArr;
}

console.log(getDivisibleNumbers3(1, 50, 4, 6));      // [ 12, 24, 36, 48 ]
console.log(getDivisibleNumbers3(21, 50, 4, 6));     // [ 24, 36, 48 ]
console.log(getDivisibleNumbers3(1, 10, 3, 2));      // [6]
console.log(typeof getDivisibleNumbers3);           // function

/**
 * Create code to get the number of values from array which contains 'u' (ignoring cases)
 */
console.log("\nget the number of values from array which contains 'u' (ignoring cases)");
let arr = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer', 'saTuRn', 'uraNUs'];         // 5

/**
 * numOfWords = 0
 * 
 * if (arr[0].lowercase.includes('u')
 *      numOfWords++
 * 
 * if (arr[1].lowercase.includes('u')
 *      numOfWords++
 * 
 * if (arr[2].lowercase.includes('u')
 *      numOfWords++
 * 
 * if (arr[3].lowercase.includes('u')
 *      numOfWords++
 * ...
 * ...
 * 
 * if (arr[last].lowercase.includes('u')
 *      numOfWords++
 * 
 * 
 * 
 * if (arr[N].lowercase.includes('u')       N=0,1,2,3,....,last
 *      numOfWords++
 * 
 * 
 * 
 * numOfWords should have funal answer
 */
let numOfWords = 0;
for (let N=0 ; N <= arr.length-1 ; N++) {
    if (arr[N].toLowerCase().includes('u')) {
        numOfWords++;
    }
}
console.log(`Number of values from array which contains 'u' -> ${numOfWords}`);


let numOfWords2 = 0;
for (let word of arr) {
    if (word.toLowerCase().includes('u')) {
        numOfWords2++;
    }
}
console.log(`Number of values from array which contains 'u' -> ${numOfWords2}\n\n`);
/**
 * 1. what is the purpose of the function?
 *      getNumOfWordsContains
 * 2. Do I need any input from user? - 2
 *      If yes,
 *          a) how many inputs we need from user? - inputArr, containsThis
 * 3. Should the function return any value back to user? - Yes
 *      return numOfWords
 *
 */

function getNumOfWordsContains(inputArr, containsThis) {
    let numOfWords = 0;
    for (let N=0 ; N <= inputArr.length-1 ; N++) {
        if (inputArr[N].toLowerCase().includes(containsThis.toLowerCase())) {
            numOfWords++;
        }
    }
    return numOfWords;
}
console.log(`Number of values from array which contains 'u' -> ${getNumOfWordsContains(arr, 'u')}`);
console.log(`Number of values from array which contains 'E' -> ${getNumOfWordsContains(arr, 'E')}`);
console.log(`Number of values from array which contains 'E' -> ${getNumOfWordsContains(['happy', 'gift', 'smile', 'laugh'], 'E')}`);


const getNumOfWordsContains3 = (inputArr, containsThis) => {
    let numOfWords = 0;
    for (let N=0 ; N <= inputArr.length-1 ; N++) {
        if (inputArr[N].toLowerCase().includes(containsThis.toLowerCase())) {
            numOfWords++;
        }
    }
    return numOfWords;
}

console.log(`\nNumber of values from array which contains 'u' -> ${getNumOfWordsContains3(arr, 'u')}`);
console.log(`Number of values from array which contains 'E' -> ${getNumOfWordsContains3(arr, 'E')}`);
console.log(`Number of values from array which contains 'E' -> ${getNumOfWordsContains3(['happy', 'gift', 'smile', 'laugh'], 'E')}`);


/**
 * Create code to get the ALL indexes where 'baSeBalL' is NOT present (ignoring cases) in the array
 */
/*
let resultArr = []

const sports = ['FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
// [0, 1, 2, 3, 4, 6]

const sports = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];

    if ([0]-lowercase !== 'baSeBalL'-lowercase)
        add 0 in resultArr

    if ([1]-lowercase !== 'baSeBalL'-lowercase)
        add 1 in resultArr

    if ([2]-lowercase !== 'baSeBalL'-lowercase)
        add 2 in resultArr

    if ([3]-lowercase !== 'baSeBalL'-lowercase)
        add 3 in resultArr

    ...
    ...

    if ([last]-lowercase !== 'baSeBalL'-lowercase)
        add last in resultArr

    

    if ([A]-lowercase !== 'baSeBalL'-lowercase)     A=0, 1, 2, 3,..., last
        add A in resultArr

    

// [1, 2, 4, 5, 7]

*/
const sports = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
let resultArr = [];

for (let A=0 ; A<=sports.length-1 ; A++) {
    if (sports[A].toLowerCase().localeCompare('baSeBalL'.toLowerCase()) !== 0) {
        resultArr.push(A);
    }
}
console.log(`\nIndexes where 'baSeBalL' is NOT present (ignoring cases) in the array -> ${resultArr}`);
// [1, 2, 4, 5, 7]

/**
 * 1. what is the purpose of the function?
 *      getIndexesWithoutWord
 * 2. Do I need any input from user? - Yes
 *      If yes,
 *          a) how many inputs we need from user? - 2 (inputArr, inputWord)
 * 3. Should the function return any value back to user? - Yes
 *      return resultArr
 *
 */

function getIndexesWithoutWord(inputArr, inputWord) {
    let resultArr = [];
    for (let A=0 ; A<=inputArr.length-1 ; A++) {
        if (inputArr[A].toLowerCase().localeCompare(inputWord.toLowerCase()) !== 0) {
            resultArr.push(A);
        }
    }
    return resultArr;
}
// const sports = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
console.log(`\nIndexes where 'baSeBalL' is NOT present (ignoring cases) in the array -> ${getIndexesWithoutWord(sports, 'baSeBalL')}`);                         // [1, 2, 4, 5, 7]
console.log(`Indexes where 'rugBY' is NOT present (ignoring cases) in the array -> ${getIndexesWithoutWord(sports, 'rugBY')}`);                                 // [0, 1, 3, 4, 5, 6, 7]
console.log(`Indexes where 'GIfT' is NOT present (ignoring cases) in the array ->  ${getIndexesWithoutWord(['happy', 'gift', 'smile', 'laugh'], 'GIfT')}`);     // [0, 2, 3]

/**
 * Create a function which can reverse a given number-array (cannot use reverse-function)
 */
/*

    resultArr = []
    
    arr = [34, 23, 12, 56, 23]

    resultArr.push(arr[last]);                  // arr[last] is going to be added at index-0 of resultArr   [ arr[last] ]

    resultArr.push(arr[secondLast]);            // arr[secondLast] is going to be added at index-1 of resultArr   [ arr[last] , arr[secondLast] ]

    resultArr.push(arr[thirdLast]);             // arr[thirdLast] is going to be added at index-2 of resultArr   [ arr[last] , arr[secondLast] , arr[thirdLast] ]
    
    ...
    ...

    resultArr.push(arr[0]);                     // arr[0] is going to be added at index-last of resultArr   [ arr[last] , arr[secondLast] , arr[thirdLast] , ... , arr[0]]




    resultArr.push(arr[i]);                     // i=lastIndex-arr , secondlastIndex-arr, thirdLastIndex-arr , .... , 0         (i=arr.length-1 ; i >= 0  ; i--)
    



    [23, 56, 12, 23, 34]



    
*/
const numArr = [34, 23, 12, 56, 23];
let numArrReverse = [];
for (let i=numArr.length-1 ; i >= 0  ; i--) {
    numArrReverse.push(numArr[i]);
}
console.log(`\n\nnumArr -> ${numArr}`);
console.log(`numArrReverse -> ${numArrReverse}`);

/**
 * 1. what is the purpose of the function?
 *      getReverseArray
 * 2. Do I need any input from user? - Yes
 *      If yes,
 *          a) how many inputs we need from user? - 1 (inputArr)
 * 3. Should the function return any value back to user? - Yes
 *      return numArrReverse
 *
 */

function getReverseArray(inputArr) {
    let numArrReverse = [];
    for (let i=inputArr.length-1 ; i >= 0  ; i--) {
        numArrReverse.push(inputArr[i]);
    }
    return numArrReverse;
}

console.log(`\n\nArray:[12, 12, 32, 43, 23, 11] ; \nAfter reverse -> ${getReverseArray([12, 12, 32, 43, 23, 11])}`);
console.log(`\n\nArray:[90, 34, -1, 45] ; \nAfter reverse -> ${getReverseArray([90, 34, -1, 45])}`);
console.log(`\n\nArray:['happy', 'gift', 'laugh'] ; \nAfter reverse -> ${getReverseArray(['happy', 'gift', 'laugh'])}`);
console.log(`\n\nArray:['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr' ; \nAfter reverse -> ${getReverseArray(['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr'])}`);


/**
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */

/**
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */

/**
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */
