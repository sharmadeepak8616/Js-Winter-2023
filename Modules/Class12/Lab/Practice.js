/**
 * Practice: Create code to find the total of length of all values in the array
 * Practice: Create code to find the number of values in the array which contains 'u' (ignoring cases)
 */
/**
 * Write code to find the number of words (given in an array) which are of length > 5
 */
const arr = ['earTh', 'marS', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer', 'nePtUne', 'saturn'];
let count = 0;
for (let X=0 ; X<=arr.length-1 ; X++) {
    if (arr[X].length > 5) {
        count++
    }
}
console.log(`number of words (given in an array) which are of length > 5 -> ${count}`);

/**
 * Practice: Create code to find the smallest value in the given array
 */
/**
 * Find the longest value in the given array
 */
const arr2 = ['earTh', 'marS', 'abd', 'mercury', 'football'];
let longestString = arr2[0];        // assumption that index-0 value is the longestString

for (let X=0 ; X<=arr2.length-1 ; X++) {
    if (arr2[X].length > longestString.length) {
        longestString = arr2[X]
    }
}
console.log(`\nLongest value in the given array -> ${longestString}`);


/**
 * Practice: Create code to find the first value in the array greater than 10
 * Practice: Create code to find ALL values in the array greater than 10
 * Practice: Create code to find ALL values in the array which are divisible by 5
 */
/**
 * Find the minimum value in the given array
 */
const nums = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];

let minValue = nums[0];

/*
    if ([1] < minValue)
        minValue = [1]

    if ([2] < minValue)
        minValue = [2]

    if ([3] < minValue)
        minValue = [3]
    ...
    ...
    if ([last] < minValue)
        minValue = [last]


    Y=1,2,3..,last      Y++     Y<=lastIndex
    if ([Y] < minValue)
        minValue = [Y]

*/
for (let Y=1 ; Y<=nums.length-1 ; Y++) {
    if (nums[Y] < minValue) {
        minValue = nums[Y];
    }
}
console.log(`\nminimum value in the given array -> ${minValue}`);

/**
 * Practice: Create code to find the ALL indexes where 'baSeBalL' is NOT present (ignoring cases) in the array
 * Practice: Create code to find the index of second-occurrence of 'baSeBalL' (ignoring cases) in the array
 */
/**
 * Create code to find the ALL indexes where 'baSeBalL' is present (ignoring cases) in the array
 */
let baseballIndexes = [];
const arr3 = ['earTh', 'JUPiTer', 'nePtUne', 'saturn', 'BASeball'];
for (let X=0 ; X<=arr3.length-1 ; X++) {
    if (arr3[X].toLowerCase().localeCompare('baseball') === 0) {
        // add X in baseballIndexes-Array (unshift, push)
        baseballIndexes.push(X);
    }
}
console.log(`\nALL indexes where 'baSeBalL' is present (ignoring cases) in the array -> ${baseballIndexes}`);

