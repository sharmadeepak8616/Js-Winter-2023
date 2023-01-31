/**
 * Due date: Jan-26 (Eod)
 */

const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */


const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */


/**
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 
 * 
 * sentence2 = "hello from me to you from us"
 * sentence2.indexOf('from')    ->  6
 * sentence2.lastIndexOf('from')    ->  20
 * 6 === 20  && 6 > 0   ->      false
 * 
 * 
 * 
 * 
 * sentence2 = "hello from us";
 * sentence2.indexOf('from')    ->  6
 * sentence2.lastIndexOf('from')    ->  6
 * 6 == 6  && 6 > 0 ->  true
 * 
 * 
 * sentence2 = 'hello world'
 * sentence2.indexOf('from')    ->  -1
 * sentence2.lastIndexOf('from')    ->  -1
 * -1 === -1  && -1 > 0  ->  false
 * 
 * 
 */
let sentence2Lowercase = sentence2.toLowerCase();
let indexOf_from = sentence2Lowercase.indexOf('from');
let lastIndexOf_from = sentence2Lowercase.lastIndexOf('from');
let result4 = indexOf_from === lastIndexOf_from && indexOf_from >= 0 ;
console.log(`does word 'from' present only once in sentence2 (ignoring cases) -> ${result4}`);

// 5. the character present at second-last index in the String
/**
 * to get character present at X-index  (X-secondLast index)
 */
let secondLastIndex = sentence2.length-2;
let charAt_secondLastIndex = sentence2.charAt(secondLastIndex);
console.log(`\n\nthe character present at second-last index in the String -> ${charAt_secondLastIndex}`);










