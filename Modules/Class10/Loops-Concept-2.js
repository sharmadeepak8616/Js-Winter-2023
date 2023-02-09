/**
 * Loops:
 * 
 * for
 * while
 * do-while
 * 
 * for-of
 * for-in
 * forEach
 * 
 */

const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];

/**
 * Print all values from the given array which startsWith letter 'm' (ignore cases)
 * 
 * 
 * 
 * 
 * index-0-value
 * if (arr[0] startsWith 'm' (ignoringing cases))        // convert value into lowercase ; startsWith('m')
 *      print arr[0]
 * 
 * index-1-value
 * if (arr[1] startsWith 'm' (ignoring cases))           // convert value into lowercase ; startsWith('m')
 *      print arr[1]
 * 
 * index-2-value
 * if (arr[2] startsWith 'm' (ignoring cases))           // convert value into lowercase ; startsWith('m')
 *      print arr[2]
 * ...
 * ...
 * ...
 * index-last-value
 * if (arr[lastIndex] startsWith 'm' (ignoring cases))        // convert value into lowercase ; startsWith('m')
 *      print arr[lastindex]
 * 
 * 
 * 
 * 'magic'
 * 'ManGo'
 * 
 * 
 * X=0,1,2,...,lastIndex    X++     X<=lastIndex
 * if (arr[X] startsWith 'm' (ignoring cases))           // convert value into lowercase ; startsWith('m')
 *      print arr[X]
 * 
 */
console.log('\nQ: Print all values from the given array which startsWith letter \'m\' (ignore cases)\n');

const arr = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];
/*
    'mARAthon'
*/
for (let X=0 ; X<=arr.length-1 ; X++) {
    if (arr[X].toLowerCase().startsWith('m')) {
        console.log(arr[X]);
    }
}

/**
 * Print all words from the sentence having length>5 and contains 'i or I'
 * 
 * 'Sign in to keep your new Google News and get news based on your interests'
 * 
 * ['Sign' , 'in' , 'to' , 'keep' , 'your' , ..... ]        split()
 * 
 * if (sentenceArr[0] has length > 5 AND sentenceArr[0] contains 'i or I')
 *      print sentenceArr[0]
 * if (index-1-value has length > 5 AND index-1-value contains 'i or I')
 *      print index-1-value
 * if (index-2-value has length > 5 AND index-2-value contains 'i or I')
 *      print index-2-value
 * ...
 * ...
 * if (sentenceArr[lastIndex] has length > 5 AND sentenceArr[lastIndex] contains 'i or I')
 *      print sentenceArr[lastIndex]
 * 
 * 
 * 
 * i=0,1,2,3,...,lastIndex      i++     i<=lastIndex
 * if (sentenceArr[i] has length > 5 AND sentenceArr[i] contains 'i or I')
 *      print sentenceArr[i]
 * 
 * 
 * 'interests'
 * 
 * 
 * 'BOOM found that the visuals does not show recent condition of Turkey after a major earthquake jolted the country.'
 * 'visuals'
 * 'condition'
 * 
 * 
 * 'The video collage as, February 6, 2023'
 * 
 */
console.log('\nQ: Print all words from the sentence having length>5 and contains "i or I"\n');
const sentence = 'BOOM found that the visuals does not show recent condition of Turkey after a major earthquake jolted the country.';

const sentenceArr = sentence.split(' ');
for (let i=0 ; i<=sentenceArr.length-1 ; i++) {
    if (sentenceArr[i].length > 5 && sentenceArr[i].toLowerCase().includes('i'))  {   // sentenceArr[i] contains 'i or I' (use includes)
        console.log(sentenceArr[i]);
    }
}


/**
 * Syntax of while-loop:
 * 
 * 
 * initialization
 * while (condition) {
 *      while-loop code block
 *      code inside the block will execute until the condition is true
 *      increment/decrement     <--- MUST be the LAST LINE IN while-loop code block
 * }
 */


console.log('\n\n while-loop \n\n');
console.log('Q: Print "Hello World" 5-times');
let count=20
while (count <= 15) {
    console.log('Hello World');
    count++
}

const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer', 'Earth', 'Saturn', 'VeNUS'];
console.log('\nPrint all values of planets-array like below:\n');
console.log('\nUsing while-loop');
let index=0
while (index <= planets.length-1) {
    console.log(planets[index]);
    index++;
}

console.log('\nUsing for-loop');
for (let index=0 ; index <= planets.length-1 ; index++) {
    console.log(planets[index]);
}



console.log('\nQ: Print all words from the sentence having length>5 and contains "i or I"\n');
console.log('Using while-loop');
const sentence2 = 'BOOM found that the visuals does not show recent condition of Turkey after a major earthquake jolted the country.';
const sentenceArr2 = sentence2.split(' ');
let i=0;
while (i<=sentenceArr2.length-1) {
    if (sentenceArr2[i].length > 5 && sentenceArr2[i].toLowerCase().includes('i'))  {       // sentenceArr[i] contains 'i or I' (use includes)
        console.log(sentenceArr2[i]);
    }
    i++;
}


/**
 * Syntax of do-while-loop:
 * 
 * 
 * initialization
 * do {
 *      do-while-loop code block
 *      code inside the block will execute until the condition is true
 *      increment/decrement     <--- MUST be the LAST LINE IN do-while-loop code block
 * } while (condition)
 * 
 * ->   Code inside inside do-while will always run/execute atleast once irrespective of the result of condition
 * ->   do-while loop checks the condition before second-execution of the loop
 *      whereas, for,while-loops does check the condition before first execution of the loop
 * 
 * ->   Showing the Restaurant menu
 * ->   Showing info/marketing message to customer
 * 
 */

console.log('\nQ: Print all words from the sentence having length>5 and contains "i or I"\n');
console.log('Using do-while-loop');
const sentence3 = 'BOOM found that the visuals does not show recent condition of Turkey after a major earthquake jolted the country.';
const sentenceArr3 = sentence3.split(' ');
let d=0;
do {
    if (sentenceArr3[d].length > 5 && sentenceArr3[d].toLowerCase().includes('i'))  {       // sentenceArr[i] contains 'i or I' (use includes)
        console.log(sentenceArr3[d]);
    }
    d++;
} while (d<=sentenceArr3.length-1);


console.log('\n\n do-while-loop \n\n');
console.log('Q: Print "Hello World" 5-times');
let dCount=20
do {
    console.log('Hello World');
    dCount++
} while (dCount <= 15)



