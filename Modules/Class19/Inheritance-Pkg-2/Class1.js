const Class2 = require("./Class2");

class Class1 {

    #myName1 = 'Class1';

    showMyName1() {
        console.log(`\nMy name is ${this.#myName1}`);
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