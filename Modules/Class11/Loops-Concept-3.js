/**
 * Loops:
 * 
 * for
 * while
 * do-while
 * 
 * for-of
 * for-in
 * forEach
 * 
 */

/**
 * verify 'Basketball' is present (ignore cases) at any index in the given-array
 */
/*
    convert all values in the array into Uppercase using loop
    apply includes in the Uppercased-values
*/

/*
    compare each value of array with 'Basketball' using loop

    if([0]-lowercase === baseketball)
        print 'Basketball is found at index-0'
        stop the loop

    if ([1]-lowercase === baseketball)
        print 'Basketball is found at index-1'
        stop the loop

    if ([2]-lowercase === baseketball)
        print 'Basketball is found at index-2'
        stop the loop
    ...
    ...
    if ([last]-lowercase === baseketball)
        print 'Basketball is found at index-last'
        stop the loop



i=0,1,2,...,last    i++     i<=lastIndex
    if ([i]-lowercase === baseketball)
        print 'Basketball is found at index-i'
        stop the loop



*/


const sports = ['FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
console.log('\nUsing for-loop');
for (let i=0 ; i<=sports.length-1 ; i++) {
    if (sports[i].toLowerCase().localeCompare('basketball') === 0) {
        console.log(`Basketball is found at index-${i}`);
        break;      // stops the loop
    }
}

/**
 * for-of
 * 
 * --> works for Arrays and String
 * --> If using loop, you need to pick value from index-0, index-1, index-2, and so on...
 * 
 * Syntax of for-of loop:
 * 
 * for (let vName of arrayName) {
 *      // code block for 
 *      // for-of loop
 * }
 * 
 * assign index-0-value-from-array to vName-variable and enters the loop
 * assign index-1-value-from-array to vName-variable and enters the loop
 * assign index-2-value-from-array to vName-variable and enters the loop
 * ...
 * ...
 * assign index-last-value-from-array to vName-variable and enters the loop
 * 
 */
// const sports = ['FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
console.log('\nUsing for-of-loop with Array');
let counter = 0;
for (let val of sports) {
    if (val.toLowerCase().localeCompare('basketball') === 0) {
        console.log(`Basketball is found at index-${counter}.`);
        break;
    }
    counter++;
}

// for (let i=sports.length-1 ; i>=0 ; i--) {
//     console.log(sports[i]);
// }
// /*
//     i=6
//         sports[6]
//     ,5
//         sports[5]
//     ,4,3,2,1,0
// */

/**
 * for-of
 * 
 * --> works for Arrays and String
 * --> If using loop, you need to pick value from index-0, index-1, index-2, and so on...
 * 
 * Syntax of for-of loop:
 * 
 * for (let vName of strName) {
 *      // code block for 
 *      // for-of loop
 * }
 * 
 * assign index-0-value-from-string to vName-variable and enters the loop
 * assign index-1-value-from-string to vName-variable and enters the loop
 * assign index-2-value-from-string to vName-variable and enters the loop
 * ...
 * ...
 * assign index-last-value-from-string to vName-variable and enters the loop
 * 
 */

console.log('\nUsing for-of-loop with String');
str1 = 'king queen';

for (let val of str1) {
    console.log(val);
}

console.log('\nUsing for-loop with String');

/*
    print index-0-value     console.log(charAt(0))
    print index-1-value     console.log(charAt(1))
    print index-2-value     console.log(charAt(2))
    ...
    ...
    print index-last-value  console.log(charAt(last))


    console.log(charAt(W))      // w=0,1,2,3,...,last       W++     W<=last


*/
for (let W=0 ; W <= str1.length-1 ; W++) {
    console.log(str1.charAt(W)); 
}

/**
 * for-in
 * 
 * --> works with object
 * 
 * Syntax:
 * 
 * for (let vName in objName) {
 *      // code block
 * }
 * 
 * assign first-key to vName, and enter in the loop
 * assign second-key to vName, and enter in the loop
 * assign third-key to vName, and enter in the loop
 * assign fourth-key to vName, and enter in the loop
 * ...
 * ...
 * assign last-key to vName, and enter in the loop
 * 
 */
console.log('\n for-in loop \n');
let employee101 = {             // created a variable (named: employee101), and assign an object to it.
    name : 'John Doe',
    age : 25,
    liveInState : 'NJ',
    gender : 'M',
    department : 'Finance',
    salary : 250000,
    firstJob : false,
    pastJob : {
        past1: 'ABC',
        past2: 'XYZ',
        past3: 'DEF'
    },
    skills : ['Finance101', 'Marketing', 'Finance102', 'Finance103']
};


for (const attr in employee101) {
    console.log(`${attr} -- ${employee101[attr]}`);        // name -- John Doe
}


/**
 * Find the number of attributes in the employee101-object
 */
/*
    name            count=1
    age             count=2
    liveInState     count=3


*/
let count = 0;
for (const attr in employee101) {
    count++;
}
console.log(`\nNumber of attributes in employee101 = ${count}`);


/**
 * find how many attributes in the employe101 has length>7
 */
/**
 * count = 0
 * 
 * 
 * attr1
 * if (attr1.length > 7)
 *      count++
 * 
 * attr2
 * if (attr2.length > 7)
 *      count++
 * 
 * attr3
 * if (attr3.length > 7)
 *      count++
 * 
 * attr4
 * if (attr4.length > 7)
 *      count++
 * 
 * ...
 * ...
 * 
 * attrLast
 * if (attrLast.length > 7)
 *      count++
 */
let count1 = 0;
for (let attr in employee101) {
    if (attr.length>7) {
        count1++
    }
}
console.log(`\nNumber of attributes in the employe101 has length>7 -> ${count1}`);


/**
 * find how many attributes in the employe101 has number-as-value
 */

/**
 * count = 0
 * 
 * 
 * attr1
 *      attr1-value
 *      if (typeof attr1-value === 'number')
 *          count++
 * 
 * attr2
 *      attr2-value
 *      if (typeof attr2-value === 'number')
 *          count++
 * 
 * attr3
 *      attr3-value
 *      if (typeof attr3-value === 'number')
 *          count++
 * 
 */

employee101['listing'] = 100;


let numberValueCount = 0;
for (const abc in employee101) {
    const value = employee101[abc];
    if (typeof value === 'number') {
        numberValueCount++;
    }
}
console.log(`\nNumber of attributes in the employe101 has number-as-value -> ${numberValueCount}`);

console.log(employee101);









