const Class2 = require("./Class2");

class Class3 extends Class2 {

    #myName3 = 'Class3';

    showMyName3() {
        console.log(`\nMy name is ${this.#myName3}`);
    }


}
module.exports = Class3;