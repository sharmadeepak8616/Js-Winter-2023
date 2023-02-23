/**
 * If we want to access a function/variable from a different class.
 * 1. we have to import it using require-line.
 * 2. we need to create an object of the class (if not created already)
 */
const MyArrayFunctions = require('./MyArrayFunctions');
const MyStringFunctions = require('./MyStringFunctions');
const MyMathFunctions = require('./MyMathFunctions');

const maf = new MyArrayFunctions();
const msf = new MyStringFunctions();
const mmf = new MyMathFunctions();
// I need to reverse an array

let numbers = [1, 2, 3, 4, 5];

const ans = maf.getReverseArray(numbers);
console.log(ans);
console.log(numbers);

const numbers2 = [90, 89, 87];

const ans2 = maf.getReverseArray(numbers2);
console.log(ans2);
console.log(numbers2);

// convert username into titleCase and store result in userName-variable
console.log(('\nconvert username into titleCase and store result in userName-variable'));
const userInput = 'jOHn dowAnE';
const userName = msf.toTitleCase(userInput);
console.log(userInput);
console.log(userName);

// find the area of a rectangle with given length and breadth; store result in rectArea-variable
console.log('\nfind the area of a rectangle with given length and breadth');
const l = 20, b = 10
const rectArea = mmf.getAreaOfRectangle(l, b);
console.log(`length = ${l}, breadth = ${b}`);
console.log(`Area = ${rectArea}`);

// find the sum of two numbers, and store the result in total-variable
console.log('\nfind the sum of two numbers, and store the result in total-variable');
const value1 = 9876, value2 = 5613
const total = mmf.addTwoNumbers(value1, value2);
console.log(`value1 = ${value1}, value2 = ${value2}\ntotal = ${total}`);

// find the average of the given array, and store the result in arrAvg-variable
console.log('\nfind the average of the given array, and store the result in arrAvg-variable');
const numArr = [98, 43, 12, 34, 78, -10];
const arrAvg = maf.getArrayAverage(numArr);
console.log(numArr);
console.log(`Average = ${arrAvg}`);

// convert all array-values in the TitleCase, and store result in updatedArr-variable
/*
    Example:
        inputArr = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'mY pLaNeTS']
        resultArr = ['Earth', 'Mercury', 'Venus', 'Mars', 'My Planets']
*/
console.log('\nconvert all array-values in the TitleCase, and store result in updateArr-variable');
const fruits = ['aPPle', 'mANgO', 'RED GrAPeS', 'KIWi', 'BaNAnA'];
const updatedArr = maf.convertInTitleCase(fruits);
console.log(fruits);
console.log(updatedArr);










const course_abc = maf.isCourseValid('abc');
if (course_abc) {
    console.log('\n\nCouse found');
    console.log(course_abc);
} else {
    console.log('\n\nNo course found');
}


const course_manual_qa = maf.isCourseValid('manual Qa');
if (course_manual_qa) {
    console.log('\n\nCouse found');
    console.log(course_manual_qa);
} else {
    console.log('\n\nNo course found');
}
