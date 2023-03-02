/**
 * Library: mini project done by others for a specifc need/tasks.
 * 
 * 
 * moment - helps us for kind of date/time related stuff
 * chai - helps us to write testcases
 * 
 * 
 * any third-party library that we want to use in the project.
 * In order to do so...first we have to import the same; therefore these are called dependencies.
 * 
 * All dependencies, we mention in package.json file
 */
/**
 * To install moment in your peoject and add it as one of the dependencies
 * Perform below command in terminal:
 *      npm install moment
 * 
 * Moment documentation:
 *      https://momentjs.com/docs/
 */

const moment = require("moment");

/**
 * moment()
 *      gets the current timestamp in default format
 */
const now = moment();
console.log(`\nnow -> ${now}`);

/**
 * date()
 *      is to get the date from the moment-object
 */
console.log(`\nnow.date() -> ${now.date()}`);

/**
 * month()
 *      is to get the month from the moment-object
 */ 
 /**
 * month starts with 0
 * jan = 0
 * feb = 1
 * mar = 2
 * ...
 * ...
 * nov = 10
 * dec = 11
 */
console.log(`\nnow.month() -> ${now.month()}`);

/**
 * year()
 *      is to get the year from the moment-object
 */
console.log(`\nnow.year() -> ${now.year()}`);

/**
 * hour()
 *      is to get the hour from the moment-object
 */
console.log(`\nnow.hour() -> ${now.hour()}`);

/**
 * minute()
 *      is to get the year from the moment-object
 */
console.log(`\nnow.minute() -> ${now.minute()}`);

/**
 * second()
 *      is to get the second from the moment-object
 */
console.log(`\nnow.second() -> ${now.second()}`);

/**
 * millisecond()
 *      is to get the millisecond from the moment-object
 */
console.log(`\nnow.millisecond() -> ${now.millisecond()}`);

/**
 * format()
 *      to format the date (or timestamp) in user defined format
 *      returns
 *          string
 */
/**
 * Dates -> D -- DD
 * Month -> M -- MM -- MMM -- MMMM
 * Year -> YY -- YYYY
 * Hour -> h -- hh -- H -- HH (h: 12-hour-format ; H: 24-hour-format)
 * Minute -> m -- mm
 * Second -> s -- ss
 * Timezone -> Z -- ZZ
 * am/pm -> a -- A (a: am/pm ; A - AM/PM)
 * DayName -> ddd -- dddd
 */
/**
 * Wed Mar 01 2023 19:32:06 GMT-0500 - Default
 * 
 * 03/1/2023 Wednesday 7:32PM
 * 
 * 10/14/2024 Thursday 10:20AM
 * 
 * YYYY
 * MM
 * D
 * h
 * mm
 * A
 * dddd
 * 
 * MM/D/YYYY dddd h:mmA
 * 
 */
console.log(`\nnow.format('MM/D/YYYY dddd h:mmA') -> ${now.format('MM/D/YYYY dddd h:mmA')}`);

const currentTime = moment();   // moment() is moment-class object; in general: moment()-object

const formattedData = currentTime.format('dddd, MMM D YYYY') ;      // Wednesday, Mar 1 2023

console.log(`\ntypeof currentTime -> ${typeof currentTime}`);
console.log(`\nformattedData -> ${formattedData}`);
console.log(`typeof formattedData -> ${typeof formattedData}`);

/**
 * To add or subtract data in the moment-object
 * 
 * add()
 *      adds the attrivute in the moment-object
 * 
 * subtract
 *      subtracts the attribute in the moment-object
 */
console.log('\n\nadd-subtract in moment-object\n');


const currTime = moment();                  // currTime contains a moment-object.
console.log(`currTime -> ${currTime}`);     // Wed Mar-1

// add 4 days in currTime
currTime.add(4, 'days');
currTime.add(1, "months");
currTime.add(47, 'hour');
currTime.add(7, 'years');
currTime.subtract(2, 'days');               // currTime.add(-2, 'days');


console.log(`\ncurrTime -> ${currTime}`);   // Mon Feb-27

console.log(currTime.date());               // 27
console.log(currTime.month());              // 1

/**
 * To find if the string is in expected date format
 * function: isValid()
 * 
 * if the given string is in valid/expected date format
 *      function returns true
 * otherwise
 *      function retuns false
 */

const str1 = '3/14/2024 Wed 4:32am';
const str2 = '2024/01/03 Wed 4:32am';

expectedDateFormat = 'YYYY/DD/MM ddd H:mma';

const isStr1InValidFormat = moment(str1, expectedDateFormat).isValid();
console.log(`\nisStr1InValidFormat -> ${isStr1InValidFormat}`);

const isStr2InValidFormat = moment(str2, expectedDateFormat).isValid();
console.log(`\nisStr2InValidFormat -> ${isStr2InValidFormat}`);


/**
 * To set the attributes in moment-object
 */
const m1 = moment().month('Jan').year(1990).date(21);

console.log(`m1 -> ${m1}`);


m1.add(43, 'days');


console.log(`\n\nm1 -> ${m1}`);


// Print the tomorrow's date
console.log("\nPrint the tomorrow's date");
const abc = moment();
abc.add(1, 'days');
console.log(abc.format('D'));
console.log(abc.date());
// abc -> Mar-2

/**
 * to find the difference between two moment-objects
 * function: diff()
 */
const def = moment();   // Mar-1
const efg = moment();

console.log(`\n\nabc -> ${abc}`);
console.log(`def -> ${def}`);
const diffInDays = abc.diff(def, 'days');  // hours, minutes, year, months, weeks
console.log(`diffInDays -> ${diffInDays}`);

/**
 * To find if a moment-obejct comes after another moment-object
 * function: isAfter()
 * 
 * if the moment-object comes after another moment-object
 *      function returns true
 * otherwise
 *      function returns false
 */
console.log(`\n\nabc -> ${abc}`);
console.log(`def -> ${def}`);
const isAbcAfterDef = abc.isAfter(def);
console.log(`isAbcAfterDef -> ${isAbcAfterDef}`);


/**
 * To find if a moment-obejct comes before another moment-object
 * function: isBefore()
 * 
 * if the moment-object comes before another moment-object
 *      function returns true
 * otherwise
 *      function returns false
 */
console.log(`\n\nabc -> ${abc}`);
console.log(`def -> ${def}`);
const isAbcBeforeDef = abc.isBefore(def);
console.log(`isAbcBeforeDef -> ${isAbcBeforeDef}`);

/**
 * To find if a moment-obejct equals to another moment-object
 * function: isSame()
 * 
 * if the moment-object equals to another moment-object
 *      function returns true
 * otherwise
 *      function returns false
 */
console.log(`\n\nabc -> ${abc}`);
console.log(`def -> ${def}`);
const isDefSameAbc = def.isSame(abc);
console.log(`isDefSameAbc -> ${isDefSameAbc}`);

const isDefSameMoment = def.isSame(moment());
console.log(`isDefSameMoment -> ${isDefSameMoment}`);       // false

console.log(`\n\ndef -> ${def}`);
console.log(`efg -> ${efg}`);
const isDefSameEfg = def.isSame(efg);
console.log(`isDefSameEfg -> ${isDefSameEfg}`);             // false

/**
 * to find if a moment-object comes in between the two momnet-object
 * function: isBetween()
 * 
 * if the moment-object comes in between the two momnet-object
 *      function returns true
 * otherwise
 *      function returns false
 */
console.log(`\n\nm1 -> ${m1}`);
console.log(`def -> ${def}`);
console.log(`abc -> ${abc}`);

const isDefBetween_m1_abc = def.isBetween(m1, abc);
console.log(`isDefBetween_m1_abc -> ${isDefBetween_m1_abc}`);

const isAbcBetween_m1_def = abc.isBetween(m1, def);
console.log(`isAbcBetween_m1_def -> ${isAbcBetween_m1_def}`);