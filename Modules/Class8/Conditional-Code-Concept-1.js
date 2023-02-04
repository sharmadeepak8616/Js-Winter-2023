/**
 * if it's raining
 *      take umbrella
 * 
 * condition: if it's raining
 * action: take umbrella
 * 
 * if it's raining
 *      take umbrella
 * if it's snowing
 *      wear snow shoes
 * if it's sunny
 *      wear bright color
 * 
 */
/**
 * Conditional Code Block (Conditional Loop)
 *  1. if-else block
 *  2. switch block
 * 
 * When we have different actions to do (code to execute) depending upon condition(s)
 * 
 */

/**
 * Syntax of if-block
 * 
 * 
 * if (condition(s)) {
 *      if-block
 *      code will execute only if the condition(s) result into true.
 * 
 *      Only when the condition(s) result into true; Js enters in the if-block
 *      Otherwise, it will not enter in the if-block.
 * }
 * 
 */

let name1 = 'King';

/**
 * print 'Hello World' if the name1-value has length greater than or equal to 10;
 * 
 * condition -> name1-value has length greater than or equal to 10;
 * action -> print 'Hello World'
 */

if (name1.length >= 10) {
    console.log('Hello World');
}


/**
 * if the name1-value has length greater than or equal to 10 OR name1-value contains 'y'
 *      print 'Hello World'
 * 
 * conditions -> name1-value has length greater than or equal to 10 || name1-value contains 'y'
 *      action -> print 'Hello World - 2'
 *
 */

if (name1.length >= 10 || name1.includes('y')) {
    console.log('Hello World - 2');
}

/**
 * 
 * name1='king'
 *      print 'Bye World'
 * 
 * name1='king kong'
 *      print 'Bye World'
 * 
 * if the name1-value has length greater than or equal to 10 OR name1-value contains 'y'
 *      print 'Hello World'
 * otherwise
 *      print 'Bye World'
 * 
 * 
 * 
 * Syntax:
 * 
 * if (condition(s)) {
 *      if-block
 *      code will execute only if the condition(s) result into true.
 * 
 *      Only when the condition(s) result into true; Js enters in the if-block
 *      Otherwise, it will not enter in the if-block.
 * } else {             // --> we never put condition before else-block
 *      else-block
 *      code will execute only when if-condition(s) result into false
 * 
 *      Only when the if-condition(s) result into false; Js enters in the else-block
 *      Otherwise, it will ignore the else-block.
 * }
 *
 */
name1 = 'Johnson doe wright';
if (name1.length >= 10 || name1.includes('y')) {
    console.log('Hello World - 3');
} else {
    console.log('Bye World');
}

/**
 * if the name1-value has length greater than or equal to 10 OR name1-value contains 'y'
 *      print 'Hello World'
 * otherwise check if name1-value starts with 'k' (ignoring cases)
 *      print 'name1 starts with 'k'
 * otherwise check if name1-value has more than 2 words
 *      print 'name1 has more than 2 words'
 * 
 * 
 * condition(s) -> name1-value has length greater than or equal to 10 OR name1-value contains 'y'
 *      print 'Hello World'
 * condition(s) -> name1-value starts with 'k' (ignoring cases)
 *      print 'name1 starts with "k"'
 * condition(s) -> name1-value has more than 2 words
 *      print 'name1 has more than 2 words'
 * 
 * Syntax: if - else if - else block
 * 
 * 
 * if (condition(s)) {
 *      if-block
 *      code will execute only if the condition(s) result into true.
 * 
 *      Only when the condition(s) result into true; Js enters in the if-block
 *      Otherwise, it will not enter in the if-block.
 * } else if (condition(s)) {
 *      else-if-block
 *      code will execute only else-if the condition(s) result into true.
 * 
 *      Only when the condition(s) result into true; Js enters in the else-if-block
 *      Otherwise, it will not enter in the else-if-block.
 * } else if (condition(s)) {
 *      else-if-block
 *      code will execute only else-if the condition(s) result into true.
 * 
 *      Only when the condition(s) result into true; Js enters in the else-if-block
 *      Otherwise, it will not enter in the else-if-block.
 * } else if (condition(s)) {
 *      else-if-block
 *      code will execute only else-if the condition(s) result into true.
 * 
 *      Only when the condition(s) result into true; Js enters in the else-if-block
 *      Otherwise, it will not enter in the else-if-block.
 * } else {             // --> we never put condition before else-block
 *      else-block
 *      code will execute only when if-condition(s) result into false
 * 
 *      Only when the if-condition(s) result into false; Js enters in the else-block
 *      Otherwise, it will ignore the else-block.
 * }
 * 
 */

name1 = 'king kong queen';

if (name1.length>=10 || name1.includes('y')) {
    console.log('Hello World - 5');
} else if (name1.toLowerCase().startsWith('k')) {
    console.log('name1 starts with "k"');
} else if (name1.split(' ').length > 2) {
    console.log('name1 has more than 2 words');
}

/**
 * Student names are stored in an Array
 * 
 * If the name at index-1 has more than 5-characters, print the name.
 */
console.log('\nQ: If the name at index-1 has more than 5-characters, print the name.');
let studentNames = ['John'];;

if (studentNames.length > 1 && studentNames[1].length > 5) {
    console.log(studentNames[1]);
}

console.log('\nQ2:');
/**
 * Print the value of cityName in Uppercase, only if the cityName contains 'nEw'
 * other print the cityName is lowercase, and also print the length of cityName
 */
let cityName = 'Mexico city nEwMexiCo';

/**
 * condition -> cityName contains 'nEw' (not ignoring cases)
 *      action -> Print the value of cityName in Uppercase
 * otherwise
 *      action -> Print the value of cityName in lowercase
 *      action -> Print the length of cityName
 */
if (cityName.includes('nEw')) {
    console.log(cityName.toUpperCase());
} else {
    console.log(cityName.toLowerCase());
    console.log(cityName.length);
}

/**
 * if sports array contains 'Swimming' at any index     --> includes()
 *      print the index at which 'Swimming' is present in the array
 * otherwise
 *      add 'Swmming' in the array, then print the entire array
 */
let sports = ['Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];
if (sports.includes('Swimming')) {
    // print the index at which 'Swimming' is present in the array
    console.log(`the index at which 'Swimming' is present in the array -> ${sports.indexOf('Swimming')}`);
} else {
    // add 'Swmming' in the array,
    sports.push('Swimming');
    // then print the entire array
    console.log(sports);
}

console.log('\nAnother solution');
/*
if (sports.indexOf('Swimming') != -1) {
    // print the index at which 'Swimming' is present in the array
    console.log(`the index at which 'Swimming' is present in the array -> ${sports.indexOf('Swimming')}`);
} else {
    // add 'Swmming' in the array,
    sports.push('Swimming');
    // then print the entire array
    console.log(sports);
}
*/

/**
 * if num = 2, print num is Two
 * if num = 10, print num is Ten
 * if num = 12, print num is Twelve
 * if num = 20, print num is Twenty
 * if num = 25, print num is Twenty Five
 * if num = 6, print num is Six
 * if num = 40, print num is Forty
 */

num = 16;

if (num == 2) {
    console.log('num is Two');
} else if (num == 10) {
    console.log('num is Ten');
} else if (num == 12) {
    console.log('num is Twelve');
} else if (num == 20) {
    console.log('num is Twenty');
} else if (num == 25) {
    console.log('num is Twenty Five');
} else if (num == 6) {
    console.log('num is Six');
} else if (num == 40) {
    console.log('num is Forty');
}

/**
 * Switch-block
 * 
 * 1. all conditions are related to only ONE variable
 * 2. all conditions are checking/comparing equals (or equalsIgnoreCase)
 * 3. for every block, we have only ONE condition
 *      or multiple conditions combined using OR-operator
 * 
 * Syntax:
 * 
 * switch (varName) {
 *      case val1:
 *          case block
 *          code in this block will execute in varName is equals to val1
 *          break;      <-- defines the last line in the case-block
 *      case val2:
 *          case block
 *          code in this block will execute in varName is equals to val2
 *          break;      <-- defines the last line in the case-block
 *      case val3:
 *          case block
 *          code in this block will execute in varName is equals to val3
 *          break;      <-- defines the last line in the case-block
 *      case val4:
 *          case block
 *          code in this block will execute in varName is equals to val4
 *          break;      <-- defines the last line in the case-block
 *      default:
 *          default block
 *          code in this block will execute in varName is NOT equals to any case value
 * }
 * 
 */

console.log('\nswitch case solutions\n');
num = 25;
switch (num) {
    case 2:
        console.log('num is Two');
        break;
    case 10:
        console.log('num is Ten');
        break;
    case 12:
        console.log('num is Twelve');
        break;
    case 20:
        console.log('num is Twenty');
        break;
    case 25:
        console.log('num is Twenty Five');
        break;
    case 6:
        console.log('num is Six');
        break;
    case 40:
        console.log('num is Forty');
        break;
}

/**
 * Print the season based on month-name
 * 
 * monthName = Dec, Jan, Feb    season -> Winter
 * monthName = Mar, Apr, May    season -> Spring
 * monthName = Jun, Jul, Aug    season -> Summer
 * monthName = Sep, Oct, Nov    season -> Fall
 */

let monthName = 'Nov', season = '';

if (monthName.localeCompare('Dec')==0 || monthName.localeCompare('Jan')==0 || monthName.localeCompare('Feb')==0) {
    season = 'Winter';
} else if (monthName.localeCompare('Mar')==0 || monthName.localeCompare('Apr')==0 || monthName.localeCompare('May')==0) {
    season = 'Spring';
} else if (monthName.localeCompare('Jun')==0 || monthName.localeCompare('Jul')==0 || monthName.localeCompare('Aug')==0) {
    season = 'Summer';
}  else if (monthName.localeCompare('Sep')==0 || monthName.localeCompare('Oct')==0 || monthName.localeCompare('Nov')==0) {
    season = 'Fall'
} else {
    console.log(`Invalid monthName -> ${monthName}`);
}

console.log(`\n\nMonth -> ${monthName} ; season -> ${season}`);


switch (monthName) {
    case 'Dec':
    case 'Jan':
    case 'Feb':
        season = 'Winter'
        break;
    case 'Mar':
    case 'Apr':
    case 'May':
        season = 'Spring'
        break;
    case 'Jun':
    case 'Jul':
    case 'Aug':
        season = 'Summer';
        break;
    case 'Sep':
    case 'Oct':
    case 'Nov':
        season = 'Fall';
        break;
    default:
        console.log(`Invalid monthName -> ${monthName}`);
}

console.log('\n\nUsing switch');
console.log(`Month -> ${monthName} ; season -> ${season}`);


/**

    if username is 'happy' (ignoring cases), print 'good name'
    if username is 'joy' (ignoring cases), print 'your name has only 3-characters'. Also print username in Uppercase
    if username is 'john' (ignoring cases), print the username in Titlecase format
    if username is not any of above, print 'your username is different than we expected'

 */

console.log('\n\nUsing if-else block');

let username = 'jOHnny';

/*
    username.toLowerCase().localeCompare('happy')
        will give 0 (if username = happy)
        will give 1 (if username > happy)
        will give -1 (if username < happy)
*/

if (username.toLowerCase().localeCompare('happy') === 0) {
    console.log('Good name');
} else if (username.toLowerCase().localeCompare('joy') === 0) {
    console.log('Your name has only 3-characters');
    console.log(username.toUpperCase());
} else if (username.toLowerCase().localeCompare('john') === 0) {
    let usernameLowercase = username.toLowerCase();
    console.log(usernameLowercase.charAt(0).toUpperCase() + usernameLowercase.substring(1));        // John
} else {
    console.log('Your username is different than we expected');
}


console.log('\n\nUsing switch block');

username = 'jOY';

switch (username.toLowerCase()) {
    case 'happy':
        console.log('Good name');
        break;
    case 'joy':
        console.log('Your name has only 3-characters');
        console.log(username.toUpperCase());
        break;
    case 'john':
        let usernameLowercase = username.toLowerCase();
        console.log(usernameLowercase.charAt(0).toUpperCase() + usernameLowercase.substring(1));
    default:
        console.log('Your username is different than we expected');
        break;
}