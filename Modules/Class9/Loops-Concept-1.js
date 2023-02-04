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

/**
 * Whenever we want to repeat a peice of code on different data or multiple times, we use loops.
 * 
 * 
 * A ticket-checker verifying tickets of all passengers
 * 
 * TC - P1
 *      verifying the ticket
 *      if (ticket is valid)
 *          return the ticket
 *      else
 *          issue a fine
 * TC - P2
 *      verifying the ticket
 *      if (ticket is valid)
 *          return the ticket
 *      else
 *          issue a fine
 * TC - P3
 *      verifying the ticket
 *      if (ticket is valid)
 *          return the ticket
 *      else
 *          issue a fine
 * ...
 * ...
 * TC - P-Last
 *      verifying the ticket
 *      if (ticket is valid)
 *          return the ticket
 *      else
 *          issue a fine
 * 
 * 
 * 
 * 
 * John goes to market
 * 
 */

/**
 * Print 'Hello World' 5-times
 */
console.log('Hello World');     // count = 11
console.log('Hello World');     // count = 12
console.log('Hello World');     // count = 13
console.log('Hello World');     // count = 14
console.log('Hello World');     // count = 15    count=11   count <= 15  count++

/**
 * Syntax of for-loop:
 * 
 * for (initialization ; condition ; increment/decrement) {
 *      for-loop code block
 *      code inside the block will execute until the condition is true
 * }
 * 
 */

console.log('\n\n for-loop \n\n');

for (let count=11 ; count <= 15 ; count++) {
    console.log('Hello World');
}

/**
 * 1. Create variable (counter) with initial value
 * 2. Check if the condition
 * 3. if condition results as true, Js enters in the loop and execute code
 *    if condition results as false, Js does not enter in loop and move ahead in file
 * 4. Once all steps in for-loop is executed, Js performs the increment/decrement operation
 * 5. Check if the condition
 * 6. if condition results as true, Js enters in the loop and execute code
 *    if condition results as false, Js does not enter in loop and move ahead in file
 * 7. Once all steps in for-loop is executed, Js performs the increment/decrement operation
 * 8. Check if the condition
 * 9. if condition results as true, Js enters in the loop and execute code
 *    if condition results as false, Js does not enter in loop and move ahead in file
 * 10. Once all steps in for-loop is executed, Js performs the increment/decrement operation
 * 11. and so on....
 */

const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];

const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer', 'Earth', 'Saturn', 'VeNUS'];
console.log('\nPrint all values of planets-array like below:\n');
/**
 * print all values of planets-array like below:
 * 
 * MarS         -> index-0-value
 * MerCUrY      -> index-1-value
 * MaRS         -> index-2-value
 * JuPITer      -> index-3-value
 */

// console.log(planets[0]);    // index = 0
// console.log(planets[1]);    // index = 1
// console.log(planets[2]);
// console.log(planets[3]);    // index = lastIndex
// ...
// ...
// console.log(planets[lastIndex]);


// console.log(planets[index]);     // index=0,1,2,...,lastIndex
                                    // index=0      index <= lastIndex     index++

for (let index=0 ; index <= planets.length-1 ; index++) {
    console.log(planets[index]);
}