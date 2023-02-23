
// Due: Feb-18 (EOD)
/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */

function getSmallestWordFromArray (inputArr) {

    let smallestWord = inputArr[0];
    let smallestWordLength = inputArr[0].length;

    for (let X=1 ; X<=inputArr.length-1 ; X++) {
        if (inputArr[X].length < smallestWordLength) {
	        smallestWord = inputArr[X];
        }
    }
    return smallestWord;
}

console.log(getSmallestWordFromArray(['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT']));      // GrOW
console.log(getSmallestWordFromArray(['earTh', 'meRCUrY', 'VeNUs', 'Mars']));                               // Mars


/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */

function findNumGreaterThanValue(inputArr, value) {
    return inputArr.find(num => num > value);
}

console.log(findNumGreaterThanValue([98, 34, 12, 1, 23, 43, 65, 43, 87, 17], 10));
console.log(findNumGreaterThanValue([1, 3, 3, 65, 43, 87, 17], 80));
console.log(findNumGreaterThanValue([1, 3, 3, 6, 10, 7, 23, 1, 20], 30));

/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */
