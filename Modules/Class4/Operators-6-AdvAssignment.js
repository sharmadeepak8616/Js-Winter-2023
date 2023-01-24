/**
 * Advanced Assignment (+=, -=, *=, /=, %=)
 * 
 */

let num1 = 11;
// add 5 in num
// num++;
// num++;
// num++;
// num++;
// num++;
num1 = num1 + 5;      // num1+=5

let balance = 100000;
let deposit = 50000;
balance = balance + deposit;    // balance+=deposit

let withdraw = 10000;
balance = balance - withdraw;   // balance-=withdraw

let num = 11;
console.log(`\nnum -> ${num}`);

num = num + 5;      // num+=5
/**
 *      num + 5
 *      11 + 5
 *      16
 */
console.log(`\nnum+=5 -> ${num}`);      // 16
// num = 16

num-=2;             // num = num - 2
/**
 *      num - 2
 *      16 - 2
 *      14 
 */
console.log(`\nnum-=2 -> ${num}`);      // 14
// num = 14

num*=3;             // num = num * 3;
/**
 *      num * 3
 *      14 * 3
 *      42
 */
console.log(`\nnum*=3 -> ${num}`);      // 42
// num = 42

num%=10;            // num = num % 10
/**
 *      num % 10
 *      42 % 10
 *      2
 */
console.log(`\nnum%=10 -> ${num}`);      // 2
// num = 2

num/=2;     // num = num / 2
/**
 *  num = num / 2
 *          2 / 2
 *          1
 */
console.log(`\nnum/=2 -> ${num}`);      // 1
