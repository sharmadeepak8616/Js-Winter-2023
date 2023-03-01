const Class1 = require("./Class1");

class Class2 extends Class1 {

    #myName2 = 'Class2';

    showMyName2() {
        console.log(`\nMy name is ${this.#myName2}`);
    }


}
module.exports = Class2;