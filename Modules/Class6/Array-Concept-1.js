/**
 * Array:
 *      which can store one or more values
 *      technically, is an object
 *      represent by []
 */

let planets = ['EaRTh', 'MerCUrY', 'MaRS', 'JuPITer'];
console.log(`planets -> ${planets}`);
/**
 * planets is an Array of String (Array has string-values)
 */
let scores = [12, 43, 11];
/**
 * scores is an Array of Numbers (Arrays has number-values)
 */

/**
 * To find the number of values stored in Array
 *      OR
 * To find the length of Array
 * 
 * property: length
 * returns: number
 */
let planetsLength = planets.length;
console.log(`planetsLength -> ${planetsLength}`);

/**
 * Array stores values using the concept of index
 * 
 * first-value goes to index-0
 * second-value goes to index-1
 * third-value goes to index-2
 * fourth-value goes to index-3
 * ...
 * ...
 * last-value goes to index-last
 * 
 */

/**
 * Use of [] with Array:
 * 
 * 1. To get the value from any index
 * 2. To assign value at a particular index in the array
 */

// let planets = ['EaRTh', 'MerCUrY', 'MaRS', 'JuPITer'];

// 1. To get the value from any index
// print the value present at index-2
let valueAt2 = planets[2]  // gives the value/data present at index-2 in planets-array
console.log(`\nthe value present at index-2 -> ${valueAt2}`);

console.log(planets[1].toUpperCase());      // MERCURY
console.log(planets[1].length);             // 7

// 2. To assign value at a particular index in the array
planets[0] = 'SaTURn';      // assigning the value 'SaTURn' at index-0 in planets-array

console.log(`planets -> ${planets}`);       // let planets = ['SaTURn', 'MerCUrY', 'MaRS', 'JuPITer'];

console.log(`\n Q: Convert the word into Titlecase format\n`);

let word = "HaPPy BirTHDaY dEar";
console.log(`word -> ${word}`);     // HaPPy BirTHDaY dEar
// code
/*
    word into lowercase     ->  happy birthday dear
    split by ' '            ->  [happy, birthday, dear] (words)
    words[0]
        // apply logic
    words[1]
        // apply logic
    words[2]
        // apply logic
                            ->  [Happy, Birthday, Dear]

    words[0]+' '+words[1]+' '+words[2]
*/
let wordLowercase = word.toLowerCase();
let words = wordLowercase.split(' ');
    // [happy, birthday, dear]
    /*
        h
        H

        appy

        H + appy = Happy
    */

words[0] = words[0].substring(0,1).toUpperCase() + words[0].substring(1);        // [Happy, birthday, dear]
words[1] = words[1].substring(0,1).toUpperCase() + words[1].substring(1);        // [Happy, Birthday, dear]
words[2] = words[2].substring(0,1).toUpperCase() + words[2].substring(1);        // [Happy, Birthday, Dear]

// word = words[0]+' '+words[1]+' '+words[2];
word = words[0].concat(' ', words[1], ' ', words[2]);

console.log(`word -> ${word}`);     // Happy Birthday Dear
