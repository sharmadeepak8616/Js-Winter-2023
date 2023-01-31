

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


function insertionSort(arr) {
    for (let i=1 ; i < arr.length ; i++) {
        let nti = arr[i];
        for (let j=i-1 ; j >= 0 ; j--) {
            if (arr[j] > nti) {
                arr[j+1] = arr[j];
            } else {
                arr[j+1] = nti;
                break;
            }
        }
    }
    return arr;
}

console.log(`insertionSort([-6, 20, 8, -2, 4]) -> ${insertionSort([-6, 20, 8, -2, 4])}`);



