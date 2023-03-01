/**
 * How to handle exceptions in js?
 *      using try-catch block we handle exception.
 *      the code which can throw exception we put in the try-block
 *      And, what do do in case of exception that code we put in catch-block.
 * 
 * try {
 *      // multiple
 * 
 *      lines of 
 * 
 *      code
 * } catch {
 *      // code to run 
 *      
 *      in case of exception
 * }
 * 
 * 
 * 
 * multiple
 * 
 * 
 * lines of
 * 
 * 
 * code
 * 
 * 
 * 
 * what is static?
 *      in class we can have static or non-static variables/functions.
 *      To use static variables/functions in another(or in the same file) file, we can use it by className
 * 
 * why do we use static variables/functions?
 *      static variables: 
 *      static functions: 
 * 
 * what is constructor?
 *      constructor is a special function.
 *      name must be "constructor"
 *      constructor-function executes in order to create an object.
 *      when constructor-function runs completely then object gets created.
 * 
 * 
 * 
 */

const ABC = require("./ABC");


const abc1 = new ABC();  // abc1 have will it's own set of var1, func1. abc1 will share var2, func2


const abc2 = new ABC(20, 'Deepak');