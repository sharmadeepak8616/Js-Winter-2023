// we use "extends" keyword with childClass, 
// in order to create parent-child relation with anotherClass.
// Class1 -> v-1 ; f-1
// Class2 -> v-1 ; f-1
// Class3 -> v-1 ; f-1

const Class1 = require("./Class1");
const Class2 = require("./Class2");
const Class3 = require("./Class3");
const Class4 = require("./Class4");

// Class1 to be parent of Class2 (should use extends-keyword with Class2)
// Class1 -> v-1 ; f-1
// Class2 -> v-1 ; f-2
// Class3 -> v-1 ; f-1


// Class2 to be parent of Class3 (should use extends-keyword with Class3)
// Class1 -> v-1 ; f-1
// Class2 -> v-1 ; f-2
// Class3 -> v-1 ; f-3

const c1 = new Class1();    // c1-object can all it's own public variables/functions and inherited ones.
c1.showMyName1();

const c2 = new Class2();    // c2-object can all it's own public variables/functions and inherited ones.
c2.showMyName1();

const c3 = new Class3();    // c3-object can all it's own public variables/functions and inherited ones.
c3.showMyName1();

c3.showMyName2();

const c4 = new Class4();
c4.showMyName4();
c4.showMyName1();

c3.showMyName2();
