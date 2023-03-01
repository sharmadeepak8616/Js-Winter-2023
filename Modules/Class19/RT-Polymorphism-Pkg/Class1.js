class Class1 {

    #myName1 = 'Class1';

    showMyName1() {
        console.log(`\nMy name is ${this.#myName1}`);
    }

    myCalculation(num1, num2) {
        console.log(`\nAdding the given numbers...\n${num1} + ${num2} = ${num1+num2}`);
    }

    myMethod(username) {
        console.log(`\nUsername = ${username}`);
    }


}
module.exports = Class1;

/**
 * P
 *  H-2
 *  C-3
 * 
 * Me
 *  H-1
 *  C-1
 * 
 * After Inheritance
 * P
 *  H-2
 *  C-3
 * 
 * Me
 *  H-3
 *  C-4
 * 
 */