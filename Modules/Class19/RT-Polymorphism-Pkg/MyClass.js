const Class2 = require('./Class2');
const Class4 = require('./Class4');

const class2Obj = new Class2();
const class4Obj = new Class4();

class2Obj.myCalculation(5, 6);      // runs myCalculation() from Class2

class4Obj.myCalculation(3, 8);      // runs myCalculation() from Class1

class2Obj.showMyName2();

class2Obj.myMethod('james')