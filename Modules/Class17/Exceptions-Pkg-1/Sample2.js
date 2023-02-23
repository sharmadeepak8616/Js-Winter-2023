class Sample2 {

    myName;
    myAge;
    static myAddr = 'ABC';

    constructor(uName, uAge) {
        if (uName) {
            this.myName = uName;
        }
        if (uAge) {
            this.myAge = uAge;
        }
        console.log(`\nThis is a constructor function with values -> ${uName}, ${uAge}`);
    }

    printName() {
        if (!this.myName) {
            throw 'invalid name';
        }
        console.log(`\nMy name is ${this.myName}`);
    }

    printAge() {
        if (!this.myAge) {
            throw 'invalid age';
        }
        console.log(`\nMy age is ${this.myAge}`);
    }

    setAge(age) {
        this.myAge = age;
    }

    static func1() {
        // code
    }


}
module.exports = Sample2;