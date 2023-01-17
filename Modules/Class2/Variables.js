/**
 * Variables: an entity to store the data temporarily.
 *      gets created during the execution of program, and gets destroyed at the end of execution.
 */

/**
 * numbers
 *      whole (numberOfCars, numberFamilyMembers, age, ssn, year, ...)
 *      decimal (bankingTransactions, temp, weight, height, bills, ...)
 * 
 * single-characters
 *      grades, gender, ...
 * 
 * multi-characters
 *      name, cityName, address, blood-group, productName, sentences, ...
 * 
 * yes/no (true/false)
 *      are you above 18?
 *      is your credit score is 500+?
 *      are you married?
 * 
 * Datatypes:
 *      defines that type/category of data in programming.
 *      types:
 *      1. numeric data (always in whole number) - int/long
 *      2. numeric data (may or may not be in decimal point) - float (can take 8-digits after decimal-point) / double (can take 16-digits after decimal-point)
 *          --> JS considers any numeric data as Number-datatype <--
 *      3. single-character -> char (or character)
 *          char-value we enclose in single quotes ('A')
 *      4. multi-characters -> String
 *          String-value we enclose in double quotes ("Apple")
 *          --> JS considers any characters as String-datatype <--
 *          --> JS considers char and String as String-datatype <--
 *          --> in JS, we can use single-quotes or double-quotes to write the String-value
 *          --> 'Apple' or "Apple"
 *      5. yes/no (true/false) -> boolean datatype
 * 
 *      JS specific datatypes:
 *      6. undefined -> when data is not known
 * 
 *      7. null -> defines nothing/empty.
 * 
 *      Datatypes in JS:
 *      1. number
 *      2. String
 *      3. boolean
 *      4. undefined
 *      5. null     (typeof null is object)
 */

/**
 * To create a variable in JS, we use let-keyword or var-keyword or const-keyword
 * 
 * Syntax to create a variable in JS:
 * 
 * let varName;     <-- we are creating a variable (named: varName), and it's value right now is undefined
 * 
 * let varName2 = myValue;   <-- we are creating a variable (named: varName), and assign/store a value (myValue) in it.
 * 
 * varName = value1;    <-- storing/assigning value (value1) to variable (varName)
 */

/**
 * Operator which helps us to figure out what type of value is stored in the variable
 *  OR
 * Operator which helps us to figure out the datatype of value stored in the variable
 * 
 * operator -> typeof
 */

// create a variable to store my age
let myAge;

/**
 * print the value stored in myAge in the console/terminal.
 * 
 * NOTE: If you want to print the value stored in a variable, 
 *  then put the variable in console.log withOUT quotes
 */
console.log(myAge);         // is going to print the value stored in myAge-variable
console.log('myAge');       // is going to print a string 'myAge'

console.log(typeof myAge);

// assign value (20) to myAge variable.
myAge = 20;

console.log(myAge);
console.log(typeof myAge);

myAge = 'Happy';

console.log(myAge);
console.log(typeof myAge);

myAge = null;

console.log(myAge);         // null
console.log(typeof myAge);  // object

/**
 * Keywords to create variable:
 *      let
 *      var
 *      const
 * 
 * let      ->  does NOT allow to create multiple variables with same-name within a scope.
 * var      ->  does allow to create multiple variables with same-name within a scope.
 * const    ->  to create a constant variable. (once the value is assigned in a variable, we cannot override it)
 */

let mySsn = 12345678;
mySsn = 98765432;

// const SSN = 12345678;
// SSN = 98765432;

// console.log(SSN);

var myAge1 = 90;

console.log(myAge1);



console.log(myAge1);


var myAge2 = 10;    // var-keyword will delete the previous myAge1-variable (if exists), and create the new variable (myAge1)


console.log(myAge1);

/**
 * Good practices to provide names:
 * 1. variables:
 *      ->  name should relate to the stored value.
 *      ->  cannot use js-keywords (let, var, typeof, console, log, const etc)
 *      ->  cannot have spaces
 *      ->  starts with lowercase (when we create const-variable, we give name in UPPERCASE)
 *      ->  never start with digit or special character
 *      ->  if name has more than one word, use camelCaseFormat
 *          eg:
 *              my age -> myAge
 *              my dog age -> myDogAge
 *              account balance -> accountBalance
 * 
 * 2. Package/Files:
 *      ->  name should relate to the content in Package/File.
 *      ->  cannot use js-keywords (let, var, typeof, console, log, const etc)
 *      ->  cannot have spaces
 *      ->  starts with Uppercase
 *      ->  never start with digit or special character
 *      ->  if name has more than one word, use CamelCaseFormat
 *          eg:
 *              set up file -> SetUpFile
 *              class 1 content package -> Class1ContentPackage (Class1_ContentPackage)
 * 
 * 
 * 
 */

// Print user information like -> User name is : Kiana Hisa and User age is 20 years

let userName = "Kiana Hisa";
let userAge = 20;

// User name is : userName and User age is userAge years

console.log('\nUser name is : userName and User age is userAge years');               // User name is : userName and User age is userAge years

console.log(`\nUser name is : ${userName} and User age is ${userAge} years`);         // User name is : Kiana Hisa and User age is 20 years


// store planet names in variable ('earth', 'mercury', 'mars', 'jupiter')
let planetEarth = 'Earth';
let planetMercury = 'Mercury';
let planetMars = 'Mars';
let planetJupiter = 'Jupiter';

/**
 * Array -> can store one or more values at the same time.
 * 
 * in JS:   typeof Array is object
 *          square-brackets([]) represents Array
 */
// let planets = [];   // created a variable (named: planets) which is empty-array

let planets = ['Earth', 'Mercury', 'Mars', 'Jupiter'];   // created an array-variable (named: planets) values in it.

console.log(`\n\nplanets -> ${planets}`);
console.log(`typeof planets -> ${typeof planets}\n\n`);

/**
 * Object -> stores key-value pair
 * 
 * in JS:   typeof object is object
 *          curly-braces ({}) represents an object
 * 
 * in object -> all keys must be unique
 *              keys cannot have spaces
 *              try to related key with a variable
 * 
 * 'John Doe' 25 'NJ' 'M' 'Finance' 250000
 * 
 * 
 * name : 'John Doe',
 * age : 25,
 * liveInState : 'NJ',
 * gender : 'M',
 * department : 'Finance',
 * salary : 250000
 * 
 * 
 * 
 */
let employee100 = {};           // created a variable (named: employee100), and assign empty object to it.

let employee101 = {             // created a variable (named: employee101), and assign an object to it.
    name : 'John Doe',
    age : 25,
    liveInState : 'NJ',
    gender : 'M',
    department : 'Finance',
    salary : 250000,
    firstJob : false,
    skills : ['Finance101', 'Marketing', 'Finance102', 'Finance103']
};

console.log(employee101);
console.log(typeof employee101);
console.log(employee101.firstJob);
console.log(employee101.skills);    // using dot-operator, we can get the value of a particular key in an object