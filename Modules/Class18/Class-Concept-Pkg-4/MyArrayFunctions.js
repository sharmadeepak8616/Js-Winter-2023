/**
 * In practical sense: We create classes in programming so that functions written in one class, can be used in another class
 * 
 * We create class in Js using class-keyword
 * Every class will have a name, preferrably same as the file name
 */
const MyStringFunctions = require('./MyStringFunctions');
const msf = new MyStringFunctions();



class MyArrayFunctions {

    /**
     * All code (functions and variables), we should write in the class-block.
     * 
     */

    getReverseArray(inputArr) {
        let numArrReverse = [];
        for (let i=inputArr.length-1 ; i >= 0  ; i--) {
            numArrReverse.push(inputArr[i]);
        }
        return numArrReverse;
    }

    getIndexesWithoutWord(inputArr, inputWord) {
        let resultArr = [];
        for (let A=0 ; A<=inputArr.length-1 ; A++) {
            if (inputArr[A].toLowerCase().localeCompare(inputWord.toLowerCase()) !== 0) {
                resultArr.push(A);
            }
        }
        return resultArr;
    }

    getNumOfWordsContains(inputArr, containsThis) {
        let numOfWords = 0;
        for (let N=0 ; N <= inputArr.length-1 ; N++) {
            if (inputArr[N].toLowerCase().includes(containsThis.toLowerCase())) {
                numOfWords++;
            }
        }
        return numOfWords;
    }

    getArrayAverage(inputArr) {
        let avg;
        let total = 0;
        for (let d=0 ; d <= inputArr.length-1 ; d++) {
            total = total + inputArr[d];
        }
        avg = total/inputArr.length;
        return avg;
    }

    arrayUpperCase(inputArr) {
        for (let X=0 ; X<=inputArr.length-1 ; X++) {
            inputArr[X] = inputArr[X].toUpperCase();
        }
        return inputArr;
    }

    convertInTitleCase(inputArr) {
        let resultArr = [];
        //  inputArr = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'mY pLaNeTS']
        /*
            [0]
                use toTitleCase() from MyStringFunctions; push result into resultArr
            [1]
                use toTitleCase() from MyStringFunctions; push result into resultArr
            [2]
                use toTitleCase() from MyStringFunctions; push result into resultArr
            ...
            ...
            [last]
                use toTitleCase() from MyStringFunctions; push result into resultArr
        */
        for (const word of inputArr) {
            resultArr.push(msf.toTitleCase(word));
        }
        return resultArr;
    }

}
module.exports = MyArrayFunctions;
