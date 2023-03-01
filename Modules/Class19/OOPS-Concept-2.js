/**
 * OOP Concept (OOP -> Object Oriented Programming)
 * 
 * 1. Encapsulation
 *      Wrapping up cpde in a single unit (i.e. Class)
 *      To implement Encapsulation concept, we create Class and write code in it.
 * 
 * 2. Abstraction
 *      Hiding unnecessary information from user
 *      To implement Abstraction concept, we create functions.
 *      
 * 3. Inheritance
 *      -> To implement Inheritance, we need to have a parent-child relationship between two classes.
 *      -> we use "extends" keyword with childClass, in order to create parent-child relation with anotherClass.
 *      -> childClass gets access to parentClass/grandParentClass variable and functions (except private variable/functions)
 *      -> a class can extend ONLY one class (why? - Diamond Problem)
 * 
 * 4. Polymorphism
 *      -> same name but different forms
 *      -> when we have two or more functions with SAME name
 *      -> Types:
 *          1. Compile-Time Polymorphism (Static Binding, Method Overloading)
 *              In a class, when we have two or more functions with SAME name but different input parameters.
 *              Ways to set different input-parameters:
 *              a) different number of input-parameters
 *              b) different datatype of input-parameters
 *              c) different sequence of input-parameters
 * 
 *          2. Run-Time Polymorphism (Dynamic Binding, Method Overriding)
 *              -> It can exist only in Inheritance set-up
 *              -> when we have a method in Child-Class with SAME name and SAME input-parameters 
 *                  as of in Parent-Class
 *              -> when we want to (or need to) overwrite/override a parentClass-function with childClass-functions
 *              
 * ***************************************
 * 
 *  super - keyword
 *      we use 'super' keyword,
 *          when we want to execute parentClass-function inside childClass-function
 *          esp, overridden functions.
 * 
 */



// Compile-Time Polymorphism (Static Binding, Method Overloading)
class MyClass {


    abc() {             // no input
        console.log('Running abc-function');
    }
    
    abc(num) {          // number input
        console.log(`num = ${num}`);
    }

    abc(username) {     // string-input
        console.log(`Username is  = ${username}`);
    }

    abc(username, passCode) {     // string-input, number-input
        console.log(`Username is  = ${username} with passcode = ${passCode}`);
    }

    abc(code, username) {     // number-input, string-input
        console.log(`Code for user '${username}' is ${code}`);
    }
    
}

abc();                      // Running abc-function

abc(1);                     // num = 1

abc('john123');             // Username is  = john123

abc('liya', 9090);          // Username is liya with passcode = 9090

abc(1234, 'kia');           // Code for user 'kia' is 1234