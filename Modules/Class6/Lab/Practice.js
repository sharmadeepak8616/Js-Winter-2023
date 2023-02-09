

// word 'body' appears before word 'hello' in the sentence
/*
    if word 'body' appears before word 'hello' in the sentence
        ans should be true
    otherwise
        ans should be false
    

    "hello world body"
        false
    
    "my body is better than hello to all"
        true
    
    "hello world"
        false
    
    "good morning to all living body"
        false
    
    "good morning"
        false

*/

sentence = "good morning to all living body"
/**
 * charAt() -> gives the character present at an index  -   X
 * indexOf(hello)   -   0
 * indexOf(body)   -    15
 * indexOf(body) < indexOf(hello) && indexOf(hello)>=0 && indexOf(body)>=0
 * 
 * 
 * 
 * "my body is better than hello to all"
 * indexOf(hello)   -   20
 * indexOf(body)   -    3
 * indexOf(body) < indexOf(hello) && indexOf(hello)>=0 && indexOf(body)>=0
 * 
 * 
 * 
 * "hello world"
 * indexOf(hello)   -   0
 * indexOf(body)   -    -1
 * indexOf(body) < indexOf(hello) && indexOf(hello)>=0 && indexOf(body)>=0
 * 
 */
let indexOf_hello = sentence.indexOf('hello');
let indexOf_body = sentence.indexOf('body');

let result1 = indexOf_body < indexOf_hello && indexOf_hello>=0 && indexOf_body>=0;
console.log(`result1 --> ${result1}`);

/**
 * Verify value in stmt-variable starts and ends with the same character
 */
let stmt = 'hello world health.';

/**
 * 'hello world'
 * starts -> find/get the character at index-0
 * ends -> find/get the character at index-last
 * comparing abv two values
 * 
 * hello world health
 * starts -> h
 * ends -> h
 */

// find/get the character at index-0
let startsCharacter = stmt.charAt(0);           // string

// find/get the character at index-last
let lastIndex = stmt.length-1;
let endsCharacter = stmt.charAt(lastIndex);     // string

let result2_1 = startsCharacter.localeCompare(endsCharacter) === 0;
console.log(`\n\nresult2_1 --> ${result2_1}`);


/**
 * find the character at index-0    (startsCharacter)
 * stmt endsWith startsCharacter
 */

let result2_2 = stmt.endsWith(startsCharacter);
console.log(`result2_2 --> ${result2_2}`);


let sentence3 = 'king kong in the city';
console.log(`\n\nsentence3 -> ${sentence3}`);
/**
 * Verify if the 2nd-word in the sentence3 startsWith 'k'
 * 
 * 
 * sentence3 = 'hello world'
 *      the 2nd-word in the sentence3 startsWith 'k'    ->  false
 * 
 * sentence3 = 'hello'
 *      the 2nd-word in the sentence3 startsWith 'k'    ->  false
 * 
 * sentence3 = 'king kong in the city'
 *      the 2nd-word in the sentence3 startsWith 'k'    ->  true
 * 
 * sentence3 = 'King and Queen living together'
 *      the 2nd-word in the sentence3 startsWith 'k'    ->  false
 */
/**
 * 1. split()   [w1, w2, w3, w4]
 * 2. get index-1-value-from-array  (string)
 * 3. index-1-value-from-array startsWith 'k'   (startsWith)
 */

let sentence3Array = sentence3.split(' ');
let index1Value = sentence3Array[1];
let result3 = index1Value.startsWith('k');
console.log(`result3 -> ${result3}`);

// ANOTHER METHOD
/**
 * 'King and Queen living together'
 * 
 * find the index of ' '    ->  5
 * get the character present at index-6     ->  a
 * character at index-6 equals 'k'
 * 
 * 
 * 'king kong in the city'
 * find the index of ' '    ->  4
 * get the character present at index-5     ->  k
 * character at index-5 equals 'k'
 * 
 */

let indexOf_Space = sentence3.indexOf(' ');
let charAt_AfterSpace = sentence3.charAt(indexOf_Space+1);
let result3_2 = charAt_AfterSpace.localeCompare('k') === 0;
console.log(`result3_2 --> ${result3_2}`);

function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk-1 from ${fromRod} to ${toRod}`);
        return
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod);
    console.log(`Move disk-${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

towerOfHanoi(4, 'A', 'C', 'B')

console.log('\nSet\n');

const mySet1 = new Set();                       // creates empty set with no-value
const mySet2 = new Set([1, 2, 3]);              // creates set with with value (1,2,3)
const mySet3 = new Set([1, 2, 3, 1]);           // creates set with with value (1,2,3) (ignore the duplicate values)


for (const item of mySet3) {
    console.log(item);
}

console.log('\nadd()\n');
console.log(mySet3);            // { 1, 2, 3 }
console.log(mySet3.add(4));     // { 1, 2, 3, 4 }
console.log(mySet3.add(5));     // { 1, 2, 3, 4, 5 }
console.log(mySet3.add(6));     // { 1, 2, 3, 4, 5, 6 }
console.log(mySet3);            // { 1, 2, 3, 4, 5, 6 }

// console.log(mySet1);
// console.log(mySet2);

console.log('\nhas()\n');
console.log(mySet3);            // { 1, 2, 3, 4, 5, 6 }
console.log(mySet3.has(4));     // true
console.log(mySet3.has(7));     // false

console.log('\ndelete()\n');
console.log(mySet3);            // { 1, 2, 3, 4, 5, 6 }
console.log(mySet3.delete(4));  // true (deleted successfully)
console.log(mySet3.delete(14))  // false (data not present in Set)
console.log(mySet3.delete(4));  // false (data not present in Set)
console.log(mySet3);            // { 1, 2, 3, 5, 6 }


console.log('\nsize()\n');
console.log(mySet3);            // { 1, 2, 3, 5, 6 }
console.log(mySet3.size);       // 5

console.log('\nclear()\n');
console.log(mySet3);            // { 1, 2, 3, 4, 5, 6 }
mySet3.clear()
console.log(mySet3);            // {}

console.log('\nMAP\n');

const myMap1 = new Map();                       // creates empty Map
const myMap2 = new Map([[1,2], [2,3], [3,4]]);  // { 1 => 2, 2 => 3, 3 => 4 }
const myMap3 = new Map([['a',1], ['b',2]]);     // { 'a' => 1, 'b' => 2 }
// a,b are the keys with value 1 and 2 respectively

console.log(myMap1);
console.log(myMap2);
console.log(myMap3);


for (const [key, value] of myMap3) {
    console.log(`${key} : ${value}`);
}

console.log('\nset()\n');
console.log(myMap3);                // { 'a' => 1, 'b' => 2 }
console.log(myMap3.set('c', 3));    // { 'a' => 1, 'b' => 2, 'c' => 3 }
console.log(myMap3.set('d', 4));    // { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }
console.log(myMap3.set('e', 3));    // { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 3 }
console.log(myMap3);                // { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 3 }

console.log('\nhas()\n');
console.log(myMap3);
console.log(myMap3.has(1));         // false (1 is not present as one of the keys)
console.log(myMap3.has('a'));       // true ('a' is present as one of the keys)
console.log(myMap3.has('A'));       // false ('A' is not present as one of the keys)


console.log('\ndelete()\n');
console.log(myMap3);                // { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 3 }
console.log(myMap3.delete('b'));    // true (delete the pair with key='b')
console.log(myMap3.delete('a'));    // true (delete the pair with key='a')
console.log(myMap3.delete('f'));    // false ('f' is not present as one of the keys)
console.log(myMap3.delete('C'));    // false ('C' is not present as one of the keys)
console.log(myMap3);                // { 'c' => 3, 'd' => 4, 'e' => 3 }



console.log('\nsize\n');
console.log(myMap3);                // { 'c' => 3, 'd' => 4, 'e' => 3 }
console.log(myMap3.size);           // 3

console.log('\nclear\n');
console.log(myMap3);                // { 'c' => 3, 'd' => 4, 'e' => 3 }
myMap3.clear();
console.log(myMap3);                // {}