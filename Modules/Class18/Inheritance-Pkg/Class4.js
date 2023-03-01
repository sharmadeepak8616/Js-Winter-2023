const Class1 = require("./Class1");

class Class4 extends Class1 {

    #myName4 = 'Class4';

    showMyName4() {
        console.log(`\nMy name is ${this.#myName4}`);
    }


}
module.exports = Class4;