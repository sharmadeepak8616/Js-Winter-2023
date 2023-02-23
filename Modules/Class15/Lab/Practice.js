/*
    Write a program to observe your chocolate consumption.
    
    If the number of chocolate bars consumed weekly is less than 20, print ”I’m not overeating chocolate”.
    If the number is equal to 20, print ”I’m not overeating, but I’m almost there”.
    And if the number is greater than 20, print ”Time for broccoli, no chocolate”.
*/

let chocolateComspumtion = 5
if (chocolateComspumtion < 20) {
    console.log(`Im not over eating chocolate`);
} else if (chocolateComspumtion === 20) {
    console.log(`Im not overeating but im almost there`);
} else {
    console.log(`Time for brocoli, no chocolate`);
}

/**
 * Find the total of numbers present in the given number-array
 */
/**
 * 1. what is the purpose of the function?
 *      sumOfArray
 * 2. Do I need any input from user? - Yes
 *      If yes,
 *          a) how manay inputs we need from user? - 1 (inputArr)
 * 
 * 3. Should the function return any value back to user? - Yes
 *      If yes,
 *          make sure to write return statement as the last line in the function (total of array, OR result)
 */
let sumOfArray = (inputArr) => {
    let arrTotal = 0;
    for (let P=0 ; P<=inputArr.length-1 ; P++) {
        arrTotal = arrTotal + inputArr[P];
    }
    return arrTotal;
}

let sumOfArray2 = function (inputArr) {
    let arrTotal = 0;
    // for-of loop
    for (let num of inputArr) {
        arrTotal = arrTotal + num;
    }
    return arrTotal;
}

/*
    total = total + [0]     // total = 0 + [0] = [0]
    total = total + [1]     // total = [0] + [1] = [0]+[1]
    total = total + [2]     // total = [0]+[1] + [2] = [0]+[1]+[2]
    ...
    ...
    total = total + [last]     // total = [0]+[1]+[2]  +  [last] = [0]+[1]+[2]+...+[last]



     total = total + [P]    // P=0,1,2,...,last     P++     P<=last
*/

const arr1 = [10, 20, 30];
const total1 = sumOfArray(arr1);
console.log(`\n\nTotal of ${arr1} = ${total1}`);

const total2 = sumOfArray2(arr1);
console.log(`Total of ${arr1} = ${total2}`);
