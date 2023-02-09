let employee102 = {};           // created a variable (employee102) and stored empty object in it.

/**
 * [val1, val2, val3, val4,....]
 * 
 * In object, we store data as key-value pair.
 *      using the key-data (or attribute-data or property-data) , we can access the corresponding value.
 * 
 * 
 * Syntax of object:
 * 
 * let objectName = {
 *      attr1 : 'val1',
 *      attr2 : 'val2',
 *      attr3 : 'val3',
 *      attr4 : 'val4'
 * }
 * 
 * attr1, attr2, attr3, attr4 -> are the key (attribute or property) in the object
 * val1 -> the value of attr1-key in the object
 * val2 -> the value of attr2-key in the object
 * val3 -> the value of attr3-key in the object
 * val4 -> the value of attr4-key in the object
 * 
 * 
 * --> All keys (attribute/property) in the object must be unique
 * --> Keys can be digit, string (with/without) spaces
 * 
 * 
 */

// store all names is the cuurent-batch in a variable
// [name1, name2, name3]
/*
    {
        name1 : '',
        name2 : '',
        name3 : ''
    }

*/

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
/**
 * attribute of employee101-object: name, age, liveInStae, gender, department, salary, firstJob, pastJob, skills
 *      name: string
 *      age: number
 *      liveInState: string
 *      gender: string
 *      department: string
 *      salary: number
 *      firstJob: boolean
 *      pastJob: object 
 *      skills: array
 */



// print the value of salary for employee101.
console.log(employee101.salary);                // using dot-operator to get the value of salary-attribute from employee101
console.log(employee101['salary']);             // using square-bracket to get the value of salary-attribute from employee101 (attribute must be present as a string value)

console.log(employee101.skills[0]);

// Print the value of past2 from employee101
console.log(employee101.pastJob.past2);                 // using dot-operator
console.log(employee101['pastJob']['past2']);           // using square-bracket



let myObj = {
    myName : 'Happy Peace',
    11 : 22,
    5 : true,
    true : 22,
    'ssn number' : 1234
}

console.log(myObj);

/**
 * To add a key-value pair, we use:
 *      dot-operator
 *          OR
 *      square-bracket
 * 
 * If the key-contains spaces, we have to use square-bracket
 */
console.log(`\nAdding age:20 in the object`);
myObj['age'] = 20;                      // if age-key is already present, then it will replace the value of age-key; otherwise add this as a new pair.
console.log(myObj);

console.log(`\nAdding 11:'King and Queen' in the object`);
myObj['11'] = 'King and Queen';         // if 11-key is already present, then it will replace the value of 11-key; otherwise add this as a new pair. (11:22, going to replace with 11:'King and Queen') 
console.log(myObj);
console.log('bcz, we have 11 as a key already, there above code will replace the existing-value(22) of 11-key with the new-value(King and Queen)');

console.log(`\nAdding gender:M in the object`);
myObj.gender = 'M';                     // if gender-key is already present, then it will replace the value of gender-key; otherwise add this as a new pair.
console.log(myObj);

console.log(`\nAdding "live in state":TX in the object`);
myObj['live in state'] = 'TX';          // if 'live in state'-key is already present, then it will replace the value of 'live in state'-key; otherwise add this as a new pair.
console.log(myObj);

/**
 * To access values of a particuler key/attribute/property, we use: 
 *      dot-operator (preferred)
 *          OR
 *      square-bracket
 * 
 * If the key-contains spaces OR key is a number, we have to use square-bracket
 * 
 * If the attribute does not present in the object, and we try to get it's value
 *      object returns undefined.
 * 
 */
console.log('\nAccessing the myName-key value using dot-operator');
const name1 = myObj.myName;
const name2 = myObj['myName'];
console.log(`name1 = ${name1}`);
console.log(`name2 = ${name2}`);

console.log('\nAccessing the 5-key value using square-bracket');
console.log(myObj[5]);

console.log('\nAccessing the "ssn number"-key value using square-bracket');
console.log(myObj['ssn number']);

console.log('\nAccessing the abc-key value using dot-operator');
const abcValue = myObj.abc;
console.log(`abcValue -> ${abcValue}`);


/**
 * To delete the attribute(pair) from the object
 * operator - delete
 * 
 * operator will find the attribute(key) in the object and deletes it OR if attribute does not exist in the object
 *      returns true
 * 
 * Note: delete operator changes the original object
 * 
 * If the key-contains spaces OR key is a number, we have to use square-bracket
 */

console.log('\n\ndeleting pair with age-attribute from the object');
console.log(delete myObj.age);
console.log(myObj);

console.log('\ndeleting pair with M-attribute from the object');
console.log(delete myObj.M);
console.log(myObj);

console.log('\ndeleting pair with 11-attribute from the object');
const isDeleted_11 = delete myObj[11];
console.log(`is pair with key-11 deleted successfully -> ${isDeleted_11}`);
console.log(myObj);

/**
 * To find if a given data is present in the object as one of the attributes(key/properties)
 * operator - in
 * 
 * if the given data is EXACTLY present as one of the keys
 *      operator returns true
 * otherwise
 *      operator returns false
 * 
 * 
 */

const is_abcd_present = 'abcd' in myObj;
console.log(`\nis 'abcd' present as one of the attributes -> ${is_abcd_present}`);

const is_ssn_present = 'ssn' in myObj;
console.log(`\nis 'ssn' present as one of the attributes -> ${is_ssn_present}`);

const is_MyName_present = 'MyName' in myObj;
console.log(`\nis 'MyName' present as one of the attributes -> ${is_MyName_present}`);

const is_true_present = 'true' in myObj;
console.log(`\nis 'true' present as one of the attributes -> ${is_true_present}`);