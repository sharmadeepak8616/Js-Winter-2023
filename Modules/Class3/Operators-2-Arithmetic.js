/**
 * Arithmetic (+, -, *, /, %, ++, --)
 * 
 * +
 * -
 * *
 * /
 * %    ->  Modulus
 * ++   ->  Increment
 * --   ->  Decrement
 * 
 */

let num1 = 10, num2 = 20, num3 = 30;
/*
let num1 = 10;
let num2 = 20;
let num3 = 30;
*/

let result1 = num1 + num2 + num3;
console.log(`${num1} + ${num2} + ${num3} = ${result1}`);                    // 10 + 20 + 30 = 60

console.log(`${num1} - ${num2} + ${num3} = ${num1 - num2 + num3}`);         // 10 - 20 + 30 = 20

console.log(`${num1} * ${num2} = ${num1 * num2}`);                          // 10 * 20 = 200

console.log(`${num1} / 7 = ${num1/7}`);                                     // 10 / 7 = 1.4

/**
 *      + operator
 * 
 * when we use + operator which Strings, it will join the Strings
 */
let name1 = "Hello";
let name2 = "World";
console.log(name1 + name2);             // "HelloWorld"
console.log(name1 + ' ' + name2);       // "Hello World"
console.log(`${name1} ${name2}`);       // "Hello World"

/**
 * %    ->  Modulus
 *      -> find the remaining value after a division.
 *      -> try dividing the number without going into decimal point
 *          whatever remains that will be output using Modulus operator.
 * 
 */
/*
    10/2 = 5 (remainder = 0)
    10/3 = 3 (remainder = 1)
    8/3 = 2 (remainder = 2)
    8/8 = 1 (remainder = 0)
    7/9 = 0 (remainder = 7)

    is 23237 divisible by 7?
*/
let m1 = 23237, m2 = 7;

let m3 = m1%m2;     // 23237 % 7
console.log(`\nModulus Operator:\n${m1} % ${m2} = ${m3}`);

/**
 * Minimum credit = 650
 * For every 50-point over 650, we will give 1% discount.
 * 
 * 750
 *      750 - 650
 *      100 (100/50) = 2
 *
 * 770
 *      770 - 650
 *      120 (120/50) = 2
 */

/**
 * ++   ->  Increment
 *      increases the value in variable by 1
 */
console.log('\nIncrement operator:');
let inc1 = 10;
console.log(`inc1 = ${inc1}`);

inc1++;     // increase the value in inc1-variable by 1
console.log(`inc1 = ${inc1}`);

inc1++;     // increase the value in inc1-variable by 1
console.log(`inc1 = ${inc1}`);

/**
 *      Post-increment
 *          if we put ++operator after the variable
 *          Post-increment executes always after ALL kinds of code on the line (behind the scenes)
 *          We execute all other kind of code with value (before increment)
 *          
 *      Pre-increment
 *          if we put ++operator before the variable
 *          Pre-increment executes always before ANY kinds of code on the line (behind the scenes)
 *          We execute all other kind of code with value (after increment)
 */
inc1++;      // increase the value in inc1-variable by 1 (post-increment)
console.log(`inc1 = ${inc1}`);

++inc1;      // increase the value in inc1-variable by 1 (pre-increment)
console.log(`inc1 = ${inc1}`);      // inc1 = 14

console.log(`inc1++ = ${inc1++}`);  // post-increment, console.log
    /**
     * console.log, post-increment (inc1 = 15)
     */
console.log(`++inc1 = ${++inc1}`);  // pre-increment, console.log
    /**
     * pre-increment (inc1 = 16)
     */


// let num1 = 10, num2 = 20, num3 = 30;
let inc2 = num1++;
/**
 * assignment (let inc2 = num1;)    inc2 = 10
 * post-increment (num1++)          num1 = 11
 */
console.log(`\ninc2 = ${inc2}`);
console.log(`num1 = ${num1}`);

// let num1 = 10, num2 = 20, num3 = 30;
let res1 = num2 + ++num3;           // pre-increment(num3)
/*
    ++num3 -> num3 = 31

    let res1 = num2 + num3;         addition
             = 20 + 31
             = 51
    
    res1 = 51

*/
console.log(`\nres1 = ${res1}`);    // 51
console.log(`num2 = ${num2}`);      // 20
console.log(`num3 = ${num3}`);      // 31


// let num1 = 11, num2 = 20, num3 = 31;
let res2 = num1++ - ++num3;
/*
    pre-increment(num3),  
        ++num3
        num3 = 32       <-------
        let res2 = num1++ - num3;

    subtraction
        let res2 = num1 - num3;
                    11 - 32
                    -21

    assignment
        let res2 = -21  <-------

    post-increment(num1)
        num1++
        num1 = 12       <-------

*/
console.log(`\nres2 = ${res2}`);    // -21
console.log(`num1 = ${num1}`);      // 12
console.log(`num3 = ${num3}`);      // 32


/**
 * --   ->  Decrement
 *      decreases the value in variable by 1
 */

/**
 *      Post-decrement
 *          if we put --operator after the variable
 *          Post-decrement executes always after ALL kinds of code on the line (behind the scenes)
 *          We execute all other kind of code with value (before decrement)
 *          
 *      Pre-decrement
 *          if we put --operator before the variable
 *          Pre-decrement executes always before ANY kinds of code on the line (behind the scenes)
 *          We execute all other kind of code with value (after decrement)
 */


// let num1 = 12, num2 = 20, num3 = 32;
let res3 = num1++ - --num2 + ++num3;
// assignment, post-increment(num1), subtraction, pre-decrement(num2), addition, pre-increment(num3)
// pre-increment(num3), pre-decrement(num2), subtraction, addition, assignment, post-increment(num1)
/*

    pre-increment(num3)
    num3 = 33       <------
    let res3 = num1++ - --num2 + num3;

    pre-decrement(num2)
    num2 = 19       <------
    let res3 = num1 - num2 + num3;
    
    subtraction
    let res3 = -7 + num3

    addition
    let res3 = 26

    assignment
    res3 = 26       <------

    post-increment(num1)
    num1 = 13       <------

*/

console.log(`\nres3 = ${res3}`);    // 26
console.log(`num1 = ${num1}`);      // 13
console.log(`num2 = ${num2}`);      // 19
console.log(`num3 = ${num3}`);      // 33


