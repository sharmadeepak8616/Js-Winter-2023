
class MyMathFunctions {

    addTwoNumbers(num1, num2) {
        return num1+num2;
    }
    
    isNumEven(num) {
        return num%2 === 2;
    }

    getAreaOfCircle(r) {
        return 3.14*(r*r);
    }

    getAreaOfRectangle(length, breadth) {
        return length*breadth;
    }

}
module.exports = MyMathFunctions;