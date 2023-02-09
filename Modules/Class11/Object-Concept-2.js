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


console.log(employee101);


/**
 * does employee101 object has "location" as one of the keys?
 * 
 * operator - 
 */

/**
 * 1. get the value of "location" attribute
 * 2. if value comes out to be undefined
 *      print "location" key is not present in the key
 *    otherwise
 *      print "location" key is present in the key
 */

if (employee101.location !== undefined) {
    console.log('"location" key is present as one of the keys');
} else {
    console.log('"location" key is NOT present as one of the keys');
}


if ('location' in employee101) {
    console.log('"location" key is present as one of the keys');
} else {
    console.log('"location" key is NOT present as one of the keys');
}

/**
 * Count the number of skills in employee101
 */
console.log(employee101.skills.length);

/**
 * if 'Communication' is not added as one of the skills in the employee101
 *      Add it
 * otherwise
 *      print 'Communication' is already present as one of the skills for employee101
 * 
 */
if (employee101.skills.includes('Communication')) {
    console.log(`'Communication' is already present as one of the skills for employee101`);
} else {
    employee101.skills.push('Communication');
}

console.log(employee101);
