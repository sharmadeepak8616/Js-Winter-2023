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
 * 
 */

let planets = ['EaRTh', 'MerCUrY', 'MaRS', 'JuPITer'];
console.log(`planets -> ${planets}`);


/**
 * To convert array into comma-separated string-value
 * function: toString()
 * return: string
 */
console.log('\n*** toString() ***')
let planets_toString = planets.toString();
console.log(`planets_toString -> ${planets_toString}`);
console.log(`typeof planets_toString -> ${typeof planets_toString}`);
console.log(`typeof planets -> ${typeof planets}`);

/**
 * To convert array into string-value with user-defined separator
 * function: join()
 * input: string (separator)
 * return: string
 * 
 * if user inputs the separator, all array-values are going to be joined using the provided separator
 * if user does NOT input the separator, all array-values are going to be joined using the default separator (comma)
 */
console.log('\n*** join() ***');
let planets_Join1 = planets.join('--');         // 'EaRth--MerCUrY--MaRS--JuPITer'
console.log(`planets_Join1 --> ${planets_Join1}`);

let planets_Join2 = planets.join();             // 'EaRth,MerCUrY,MaRS,JuPITer'
console.log(`planets_Join2 --> ${planets_Join2}`);

let planets_Join3 = planets.join('123');        // 'EaRth123MerCUrY123MaRS123JuPITer'
console.log(`planets_Join3 -> ${planets_Join3}`);

let planets_Join4 = planets.join('');           // 'EaRthMerCUrYMaRSJuPITer'
console.log(`planets_Join4 --> ${planets_Join4}`);

console.log(`planets -> ${planets}`);           // planets -> EaRTh,MerCUrY,MaRS,JuPITer

/**
 * To remove a value from array
 * function: pop()
 *      removes the last-value from the array
 *          OR
 *      removes the value stored at last index in the array
 * return: the removed value
 * 
 * function: shift()
 *      removes the first-value from the array
 *          OR
 *      removes the value stored at 0-index in the array
 * return: the removed value
 * 
 * 
 * to remove value from array
 *  pop() vs shift() vs splice()
 * 
 * 
 * NOTE: the function changes the original array
 * 
 */
console.log('\n*** pop() ***');
let popedValue = planets.pop();
console.log(`popedValue -> ${popedValue}`);
console.log(`planets -> ${planets}`);               // planets -> EaRTh,MerCUrY,MaRS


console.log('\n*** shift() ***');
let shiftedValue = planets.shift();
console.log(`popedValue -> ${shiftedValue}`);       // EaRTh
console.log(`planets -> ${planets}`);               // planets -> MerCUrY,MaRS


const names = ['john', 'liya', 'kirsten', 'king', 'helen'];
console.log(names);
// write code to remove last two values
names.pop();        // 'helen'          // names = ['john', 'liya', 'kirsten', 'king']
names.pop();        // 'king'           // names = ['john', 'liya', 'kirsten']
console.log(names);                     // names = ['john', 'liya', 'kirsten']


/**
 * To add a value in array
 * function: push()
 *      adds the last-value in the END of array
 * input: value to add
 * return: the length of array (after the value)
 * 
 * function: unshift()
 *      adds the value in the beginning of array
 * input: value to add
 * return: the length of array (after the value)
 * 
 * NOTE: the function changes the original array
 * 
 * to add value in array
 *  push() vs unshift() vs splice() vs concat()
 * 
 */
console.log(`planets -> ${planets}`);               // planets -> MerCUrY,MaRS

console.log('\n*** push() ***');
let lenAfterPushFunction = planets.push('Pluto');   
console.log(`lenAfterPushFunction -> ${lenAfterPushFunction}`);     // 3
console.log(`planets -> ${planets}`);               // planets -> MerCUrY,MaRS,Pluto

console.log('\n*** shift() ***');
let lenAfterShiftFunction = planets.unshift('SATURN');
console.log(`lenAfterShiftFunction -> ${lenAfterShiftFunction}`);     // 4
console.log(`planets -> ${planets}`);               // planets -> SATURN,MerCUrY,MaRS,Pluto

/**
 * To add/remove value in/from the array
 * function: splice()
 * input-1: index from where to add/remove values
 * input-2: how many values to remove before adding new-value(s)
 * input-3: new-values that to add
 * return: an array of removed values
 * 
 * 
 * NOTE: the function changes the original array
 * 
 */

console.log('\n*** splice() ***');

let planets_Splice1 = planets.splice(2, 0, 'Jupiter', 'Earth', 'Mars', 'Earth', 'King', 'Planets Fitness');       // adding-values only
console.log(`planets_Splice1 --> ${planets_Splice1}`);
console.log(`planets -> ${planets}`);               // planets -> SATURN, MerCUrY,'Jupiter', 'Earth', 'Mars', 'Earth', 'King', 'Planets Fitness', MaRS, Pluto

let planets_Splice2 = planets.splice(3,2);          // removing-values only
console.log(`\nplanets_Splice2 --> ${planets_Splice2}`);
console.log(`planets -> ${planets}`);               // planets -> SATURN, MerCUrY,'Jupiter', 'Earth', 'King', 'Planets Fitness', MaRS, Pluto


// Write code to replace index-3 value with 'HELLO' using splice()
let planets_Splice3 = planets.splice(3, 1, 'HELLO');
console.log(`\nplanets_Splice3 --> ${planets_Splice3}`);
console.log(`planets -> ${planets}`);               // planets -> SATURN, MerCUrY, 'Jupiter', 'HELLO', 'King', 'Planets Fitness', MaRS, Pluto


// Write code to replace first 4-values in array; and ADD 'King', 'Queen' in the beginning using splice()
let planets_Splice4 = planets.splice(0, 4, 'King', 'Queen');
/*
    // planets -> SATURN, MerCUrY, 'Jupiter', 'HELLO', 'King', 'Planets Fitness', MaRS, Pluto
        remove 4-values starting from index-0
    // planets -> 'King', 'Planets Fitness', MaRS, Pluto
        add 'King', 'Queen' starting from index-0
    // planets -> 'King', 'Queen', 'King', 'Planets Fitness', MaRS, Pluto

*/

console.log(`\nplanets_Splice4 --> ${planets_Splice4}`);
console.log(`planets -> ${planets}`);               // planets -> King, Queen, 'King', 'Planets Fitness', MaRS, Pluto

// Write code to:
// remove 2-values starting from index-2
// add 'Earth', 'Jupiter', 'Venus' starting from index-1
planets.splice(2, 2);                               // planets -> King, Queen, MaRS, Pluto
planets.splice(1, 0, 'Earth', 'Jupiter', 'Venus');
console.log(`planets -> ${planets}`);               // planets -> King, 'Earth', 'Jupiter', 'Venus', Queen, MaRS, Pluto

/**
 * To concat multiple array
 * function: concat()
 * input: values to add
 * return: a new-array after adding the values in all given arrays
 * 
 * NOTE: concat() does not change the original array(s)
 * 
 */
// planets -> King, 'Earth', 'Jupiter', 'Venus', Queen, MaRS, Pluto
let fruits = ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY'];
let states = ['NY', 'Nj', 'PA', 'ca', 'wi', 'Tx', 'aL'];

console.log('\n*** concat() ***');

const arrayAfterConcat = planets.concat(fruits, states);
console.log(`planets -> ${planets}`);
console.log(`fruits -> ${fruits}`);
console.log(`states -> ${states}`);
console.log(`arrayAfterConcat -> ${arrayAfterConcat}`);

/**
 * using concat()-function to add values in the array
 */
console.log('\nAdding values using concat()\n');
const newFruits = fruits.concat('Mango', 'KiWI');      // ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY', 'Mango', 'KiWI']
/*
        fruits.concat('Mango', 'KiWI');
            ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY', 'Mango', 'KiWI']
        storing the array in newFruits
*/
console.log(`fruits -> ${fruits}`);
console.log(`newFruits -> ${newFruits}`);

states = states.concat('AB', 'XY');
/*
    states.concat('AB', 'XY');
        [NY,Nj,PA,ca,wi,Tx,aL, AB, XY]
    replacing old-array in states-variable with new-array
*/
console.log(`states -> ${states}`);


console.log(`\n\nfruits -> ${fruits}`);

/**
 * to find if a given value is exactly present at any index in the array
 * function: includes()
 * input: value-to-check
 * return: boolean
 * 
 * if the given value is exactly present at any index
 *      function returns true
 * otherwise
 *      function returns false
 */

// fruits -> apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY

console.log('\n*** includes() ***');
let isIncludes_apple = fruits.includes('apple');
console.log(`\nis "apple" present at any index -> ${isIncludes_apple}`);        // true

let isIncludes_Cel = fruits.includes('Cel');
console.log(`\nis "Cel" present at any index -> ${isIncludes_Cel}`);            // false

let isIncludes_CHerry = fruits.includes('CHerry');
console.log(`\nis "CHerry" present at any index -> ${isIncludes_CHerry}`);      // false

let isIncludes_Mango = fruits.includes('Mango');
console.log(`\nis "Mango" present at any index -> ${isIncludes_Mango}`);        // false


// fruits -> apple,BAnana,Cherry,GraPEs,Celery,BluebeRRY
fruits = fruits.concat('apple', 'BluebeRRY', 'Cherry', 'apple', 'Grapes', 'BAnana', 'BluebeRRY', 'apple');

/**
 * To find the index of FIRST OCCURRENCE of a value in the array
 * function: indexOf()
 * input: value
 * return number
 * 
 * if the given value is EXACTLY present at any index in the array
 *      function returns the index of FIRST OCCURRENCE
 * otherwise
 *      function returns -1
 * 
 */
// fruits -> apple,BAnana,Cherry,GraPEs,Celery,BluebeRRY,apple,BluebeRRY,Cherry,apple,Grapes,BAnana,BluebeRRY,apple
console.log('\n*** indexOf() ***');
const indexOf_apple = fruits.indexOf('apple');
console.log(`\nFirst occurrence of "apple" is at index -> ${indexOf_apple}`);           // 0

const indexOf_Banana = fruits.indexOf('Banana');
console.log(`\nFirst occurrence of "Banana" is at index -> ${indexOf_Banana}`);         // -1

const indexOf_Blue = fruits.indexOf('Blue');
console.log(`\nFirst occurrence of "Blue" is at index -> ${indexOf_Blue}`);             // -1

const indexOf_Celery = fruits.indexOf('Celery');
console.log(`\nFirst occurrence of "Celery" is at index -> ${indexOf_Celery}`);         // 4

/**
 * To find the index of LAST OCCURRENCE of a value in the array
 * function: lastIndexOf()
 * input: value
 * return number
 * 
 * if the given value is EXACTLY present at any index in the array
 *      function returns the index of LAST OCCURRENCE
 * otherwise
 *      function returns -1
 * 
 */

// fruits -> apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, apple, BluebeRRY, Cherry, apple, Grapes, BAnana, BluebeRRY, apple

console.log('\n*** lastIndexOf() ***');
const lastIndexOf_apple = fruits.lastIndexOf('apple');
console.log(`\nLast occurrence of "apple" is at index -> ${lastIndexOf_apple}`);           // 13

const lastIndexOf_Banana = fruits.lastIndexOf('Banana');
console.log(`\nLast occurrence of "Banana" is at index -> ${lastIndexOf_Banana}`);         // -1

const lastIndexOf_Blue = fruits.lastIndexOf('Blue');
console.log(`\nLast occurrence of "Blue" is at index -> ${lastIndexOf_Blue}`);             // -1

const lastIndexOf_Celery = fruits.lastIndexOf('Celery');
console.log(`\nLast occurrence of "Celery" is at index -> ${lastIndexOf_Celery}`);         // 4

/**
 * To find if the given variable has Array in it or not
 * function: isArray()
 * input: variable/value
 * return: boolean
 * 
 * if the variable contains array
 *      function returns true
 * otherwise
 *      function returns false
 */

console.log('\n*** isArray() ***');

const isArray_fruits = Array.isArray(fruits);
console.log(`\nis 'fruits' contain an array -> ${isArray_fruits}`);

const isArray_123 = Array.isArray(123);
console.log(`\nis '123' an array -> ${isArray_123}`);

const isArray_lastIndexOf_Banana = Array.isArray(lastIndexOf_Banana);
console.log(`\nis 'lastIndexOf_Banana' contain an array -> ${isArray_lastIndexOf_Banana}`);

const isArray_Happy = Array.isArray('Happy');
console.log(`\nis 'Happy' an array -> ${isArray_Happy}`);

const isArray_Happy2 = Array.isArray(['Happy']);            
console.log(`\nis '[Happy]' an array -> ${isArray_Happy2}`);

const isArray_SqBt = Array.isArray([]);
console.log(`\nis '[]' an array -> ${isArray_SqBt}`);

/**
 * To reverse an array
 * function: reverse()
 * 
 * NOTE: it changes the original array
 */

// fruits -> apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, apple, BluebeRRY, Cherry, apple, Grapes, BAnana, BluebeRRY, apple

console.log(`fruits -> ${fruits}`);

console.log('\n*** reverse() ***\n');
fruits.reverse();
console.log(`fruits -> ${fruits}\n\n`);

let arr = [1, 2, 3, 4, 5];

console.log(arr);
arr.reverse();
console.log(arr);

/**
 * To replace value from a specific index
 * function: fill()
 * input-1: newValue
 * input-2: start index from which we want to replace
 * input-3: end-index (up to which we should replace the values -- endIndex is excluded)
 * 
 * if input-3 is not provided
 *      all values from sytarting-index will be replace with new-value
 * 
 * if input-2 and input-3 are not provided
 *      all values in the array will be replace with new-value
 * 
 * NOTE: it changes the original array
 * 
 */

// fruits -> apple,BluebeRRY,BAnana,Grapes,apple,Cherry,BluebeRRY,apple,BluebeRRY,Celery,GraPEs,Cherry,BAnana,apple

console.log(`fruits -> ${fruits}`);

console.log('\n*** fill() ***\n');

fruits.fill('KING' , 3, 6);     // replace values at index-3, 4, 5 with KING

console.log(`fruits -> ${fruits}`);     // fruits -> apple,BluebeRRY,BAnana,KING,KING,KING,BluebeRRY,apple,BluebeRRY,Celery,GraPEs,Cherry,BAnana,apple

fruits.fill('John Doe', 5);     // replace all values from index-5 with 'John Doe'

console.log(`fruits -> ${fruits}`);

fruits.fill('Hello');           // replace values at every index witn Hello

console.log(`fruits -> ${fruits}`);