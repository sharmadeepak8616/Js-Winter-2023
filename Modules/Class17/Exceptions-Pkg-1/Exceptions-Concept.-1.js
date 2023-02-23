/**
 * Exceptions:
 *      unknown/unhandled situation where programming language has no idea what do to; 
 *      so it stops the execution right away (or it crashes the application/program).
 * 
 * To handle exception, we use try-catch block
 * 
 * Syntax:
 *      try {
 *          // try-block
 *          // we write code which may/mayNot throw exception
 *      } catch (e) {
 *          // catch-block
 *          // we write the code to be executed in case exception occurs.
 *      }
 * 
 * 
 * In try-block, we may write multiple lines of code
 *  as soon as an exception occurs in the try-block
 *  js jumps in the catch-block, and start executing the code in the catch-block
 *  and, move ahead in the file (it doesnot come back again the try-block)
 * 
 * In no-exception occurs in try-block, js will never enter in the catch-block
 * in JS: There can be only 1-catch block with try-block
 * 
 * 
 */

const Sample2 = require("./Sample2");

try {
    const obj2 = new Sample2('Happy', 22);
    obj2.printName();
    obj2.printAge();

    const obj3 = new Sample2('Happy', 30);
    obj3.printName();
    obj3.printAge();

    const obj4 = new Sample2('Harry', 20);
    obj4.printName();
    obj4.printAge();

} catch (e) {
    console.log('Exception caught');
}

console.log('Outside the try-catch block');


