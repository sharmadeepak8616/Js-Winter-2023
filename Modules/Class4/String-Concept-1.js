/**
 * String
 *      any value within a single-quotes or double-quotes is a String.
 * 
 * functions:
 *      String-Concept-1.js
 *              length (property)
 *              toUpperCase()
 *              toLowerCase()
 *              startsWith()
 *      
 */

let sentence = 'hello dear, hOw ARe You DoiNG? TodaY is FriDay';
let dayName = 'FrIDaY';

/**
 * String stores in memory using indexes.
 * First character goes into index-0
 * Second character goes into Index-1
 * Third character goes into Index-2 
 * ...
 * ...
 * Last character goes into Index-last
 */

/**
 * To find the number of characters in a String (To calculate total number of boxes used to store String-data)
 *  OR
 * To find the length of String
 * 
 * property: length
 */
console.log(`\ndayName -> ${dayName}`);
let dayNameLength = dayName.length;
console.log(`dayName length is ${dayNameLength}`);      // 6

console.log(`\nsentence -> ${sentence}`);
let sentenceLength = sentence.length;
console.log(`sentence length is ${sentenceLength}`);      // 46

/**
 * FrIDaY
 * First character goes into index-0            F
 * Second character goes into Index-1           r
 * Third character goes into Index-2            I
 * Fourth character goes into Index-3           D
 * Fifth character goes into Index-4            a
 * Last character goes into Index-5             Y
 * 
 * length = 6
 * last-index = 5
 * 
 * 
 * HI
 * index-0      H
 * index-1      I
 * 
 * length = 2
 * last-index = 1
 * 
 * lastIndex = length - 1
 * 
 */


let news = "Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.";
// what is the last index in news-string?
let lastIndexInNews = news.length - 1;
console.log(`\n\nLast index in news -> ${lastIndexInNews}`);

/**
 * To convert a String into Uppercase
 * function: toUpperCase()
 * 
 *      copies the String-value, converts the copy into uppercase and returns the result.
 *      Therefore, the original String does not change.
 */
// let sentence = 'hello dear, hOw ARe You DoiNG? TodaY is FriDay';
console.log('\nChecking toUpperCase()');
console.log(`sentence -> ${sentence}`);
let sentenceUppercase = sentence.toUpperCase();     // if you don't want to change original value, store the result into new-variable
/*
        sentence.toUpperCase();
            copying value of sentence-variable
            converting the abv value into UPPERCASE
            give you the result
*/

console.log(`\nsentence -> ${sentence}`);
console.log(`sentenceUppercase -> ${sentenceUppercase}`);

// sentence = sentenceUppercase;
// console.log(`\nsentence -> ${sentence}`);       // HELLO DEAR, HOW ARE YOU DOING? TODAY IS FRIDAY

/**
 * Convert the original value into Uppercase
 */
let stringVal = "HeLLo WorLd";
console.log(`\nstringVal -> ${stringVal}`);       // HeLLo WorLd

stringVal = stringVal.toUpperCase();            // if you want to change original value, store the result into same-variable
/*
        stringVal.toUpperCase();
        HELLO WORLD

        stringVal = HELLO WORLD

        converting copy into Uppercase
        replacing original value with result
*/
console.log(`stringVal -> ${stringVal}`);       // HELLO WORLD

/**
 * To convert a String into lowercase
 * function: toLowerCase()
 * 
 *      copies the String-value, converts the copy into lowercase and returns the result.
 *      Therefore, the original String does not change.
 * 
 */
console.log('\nChecking toLowerCase()');
console.log(`sentence -> ${sentence}`);

let sentenceLowercase = sentence.toLowerCase();

console.log(`\nsentence -> ${sentence}`);
console.log(`sentenceLowercase -> ${sentenceLowercase}`);

/**
 * To find if the given String starts with given pattern
 * function: startsWith()
 * input: pattern
 * return: boolean
 * 
 * if the String starts EXACTLY with the given pattern
 *      function returns true
 * otherwise
 *      function returns false
 */
// let sentence = 'hello dear, hOw ARe You DoiNG? TodaY is FriDay';
console.log('\nChecking startsWith()');
console.log(`sentence -> ${sentence}`);

let isStartsWith_Hello = sentence.startsWith('Hello');
console.log(`\nis sentence start with "Hello" -> ${isStartsWith_Hello}`);

let isStartsWith_hello_deA = sentence.startsWith('hello deA');
console.log(`is sentence start with "hello deA" -> ${isStartsWith_hello_deA}`);

let isStartsWith__hello = sentence.startsWith(' hello');
console.log(`is sentence start with " hello" -> ${isStartsWith__hello}`);

let isStartsWith_he = sentence.startsWith('he');
console.log(`is sentence start with "he" -> ${isStartsWith_he}`);