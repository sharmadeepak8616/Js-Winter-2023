const Class1 = require("./Class1");

class Class2 extends Class1 {

    #myName2 = 'Class2';

    showMyName2() {
        console.log(`\nMy name is ${this.#myName2}`);
        this.showMyNameAgain2();        // run showMyNameAgain2()
        this.showMyName1();             // run showMyName1()
        super.myCalculation(10, 20);    // run myCalculation() from Class1
    }

    myCalculation(val1, val2) {
        console.log(`\nMultiplying the given numbers...\n${val1} * ${val2} = ${val1*val2}`);
    }

    showMyNameAgain2() {
        console.log(`\nHere is your name again.\nMy name is ${this.#myName2}`);
    }

    myMethod(user) {
        user = user.toUpperCase();
        super.myMethod(user);       // runs the myMethod() of Class1
        console.log(`Thank you providing the data.`);
    }

}
module.exports = Class2;