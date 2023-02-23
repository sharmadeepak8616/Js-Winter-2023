/**
 * Constructor:
 * 
 * 1. It's a special function
 *      name of the function/constructor is always "constructor"
 * 2. In order to create object of a class, JS has to execute/run the constructor-function completely.
 *      when there is NO constructor in a class,
 *          behind the scenes, js: 
 *              adds a default-constructor-function in class constructor() {}
 *              executes it to create the object 
 *              then removes it.
 *      if there is a constructor in a class,
 *          js executes the user-defined constructor in the order to create the object.
 *          js will NEVER create a default constructor
 * 3. We cannot have more than one-constructor in a class
 * 4. We can have input-parameters in the constructor-function; 
 *      the user has to supply input-values when creating the object.
 * 5. there will NEVER a return-statement in the constructor-function
 * 
 * 
 * Constructor vs Function
 * 1. constructor gets executed automatically when we create object of a class
 *    we have use the objName or className and class a particular function in order to execute it.
 * 2. constructor will never have return-statement
 *    function can have return-statement
 * 3. constructor-function will have name as 'constructor' only
 *    function we have provide any name based on our requirement.
 * 
 * 
 */

const Sample = require('./Sample.js')


// create object of Sample-class
const myObj = new Sample();


const myObj2 = new Sample('Harry', 22);

// using the object, only non-static variables/functions from class
myObj.printName();
myObj.printAge();

myObj2.printName();
myObj2.printAge();

Sample.func1();


// using the className, only static variables/functions from class