/**
 * Comparison (===, >=, >, <=, <, !==)
 * 
 * ===  --> equals to
 * >=   --> greater than or equals to
 * >    --> greater than
 * <=   --> less than or equals to
 * <    --> less then
 * !==  --> not equals to
 * 
 * NOTE: all comparison result in a boolean value
 * 
 */

let cNum1 = 10, cNum2 = 20;

let cNum1GrEqcNum2 = cNum1 >= cNum2;
console.log(`\n${cNum1} >= ${cNum2} = ${cNum1GrEqcNum2}`);

let cNum1GrcNum2 = cNum1 > cNum2;
console.log(`\n${cNum1} > ${cNum2} = ${cNum1GrcNum2}`);

let cNum1LeEqcNum2 = cNum1 <= cNum2;
console.log(`\n${cNum1} <= ${cNum2} = ${cNum1LeEqcNum2}`);

let cNum1LecNum2 = cNum1 < cNum2;
console.log(`\n${cNum1} < ${cNum2} = ${cNum1LecNum2}`);

let cNum1EqcNum2 = cNum1 === cNum2;     // is cNum1 equal to cNum2
console.log(`\n${cNum1} === ${cNum2} = ${cNum1EqcNum2}`);

let cNum1NtEqcNum2 = cNum1 !== cNum2;     // is cNum1 not equal to cNum2
console.log(`\n${cNum1} !== ${cNum2} = ${cNum1NtEqcNum2}`);

/**
 *  ===
 * 
 *  = (assignment) vs === (comparison)
 * 
 *  === vs ==
 *      -> both are comparison operators to check equals
 *      ===
 *          compares if two data are equals in value and datatype
 * 
 *      ==
 *          compares if two data are equals in value
 * 
 */
let a1 = 1;         // number
let a2 = '1';       // string

let a1TrEqa2 = a1 === a2;           // false
console.log(`\n${a1} === ${a2} = ${a1TrEqa2}`);

let a1DbEqa2 = a1 == a2;            // true
console.log(`${a1} == ${a2} = ${a1DbEqa2}`);

/**
 * !==
 *      compares if two data are NOT equals in value OR datatype
 * 
 * !=
 *      compares if two data are NOT equals in value
 */