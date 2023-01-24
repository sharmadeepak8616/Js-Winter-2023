/**
 * const vs let
 * 
 * let vs var
 * 
 * === vs ==
 * 
 */

let num1 = 10, num2 = 20, num3 = 30;

let num4 = num1++;      // num4=10, num1=11
/**
 *      assignment, post-increment
 * 
 *      assignment
 *      let num4 = num1;        // num4 = 10
 * 
 *      post-increment
 *      num1++                  // num1 = 11
 */
console.log(`num1 = ${num1}`);      // num1 = 11
console.log(`num2 = ${num2}`);      // num2 = 20
console.log(`num3 = ${num3}`);      // num3 = 30
console.log(`num4 = ${num4}`);      // num4 = 10

let num5 = ++num1;
/*
    pre-increment, assignment

    pre-increment
    ++num1                          // num1 = 12

    assignment
    let num5 = num1;                // num5 = 12

*/

console.log(`\nnum1 = ${num1}`);    // num1 = 12
console.log(`num2 = ${num2}`);      // num2 = 20
console.log(`num3 = ${num3}`);      // num3 = 30
console.log(`num4 = ${num4}`);      // num4 = 10
console.log(`num5 = ${num5}`);      // num5 = 12

let cNum1 = 5, cNum2 = 6;

let cNum1EqcNum2Res = ++cNum1 === cNum2++;
/*
    assignment, pre-increment(cNum1), equalsComparison, post-increment(cNum2)

    pre-increment(cNum1)
    ++cNum1                             cNum1 = 6
    let cNum1EqcNum2Res = cNum1 === cNum2;

    equalsComparison
    let cNum1EqcNum2Res = cNum1 === cNum2;      cNum1=6, cNum2=6
                        = true

    assignment
    let cNum1EqcNum2Res = true

    post-increment(cNum2)
    cNum2++                             cNum2 = 7
*/

console.log(`\ncNum1 = ${cNum1}`);                      // cNum1 = 6
console.log(`cNum2 = ${cNum2}`);                        // cNum2 = 7
console.log(`cNum1EqcNum2Res = ${cNum1EqcNum2Res}`);    // cNum1EqcNum2Res = true

// console.log(`\nnum1 = ${num1}`);    // num1 = 12
// console.log(`num2 = ${num2}`);      // num2 = 20
// console.log(`num3 = ${num3}`);      // num3 = 30
// console.log(`num4 = ${num4}`);      // num4 = 10
// console.log(`num5 = ${num5}`);      // num5 = 12


let sentence1 = 'CnnNPR news, audio, and podcasts. Coverage of breaking stories, national and world news, Coverage of breaking stories, national and world news, ';

/**
 * is the length of sentence1 greater than 50 and sentence1 starts with 'Cnn'
 */
// is the length of sentence1 greater than 50
let condition1Res = sentence1.length > 50

// sentence1 starts with 'Cnn'
let condition2Res = sentence1.startsWith('Cnn');
let conditionRes = condition1Res && condition2Res;
console.log(`\nconditionRes = ${conditionRes}`);
let conditionFinalRes = sentence1.length > 50 && sentence1.startsWith('Cnn');

sentence1 = 'Cnn NPR news, audio, and podcasts.';
/*
    index-0 data = C
    index-1 data = n
    index-2 data = n
    index-3 data =  <space> 
    index-4 data = N
*/
// find the value of last-index in the String (PS: don't want the data at last-index)
// number
console.log(`\nsentence1 = ${sentence1}`);
console.log(`last-index in sentence1 = ${sentence1.length - 1}`);






