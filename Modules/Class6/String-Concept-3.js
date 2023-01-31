/**
 * String
 *      any value within a single-quotes or double-quotes is a String.
 * 
 * functions:
 *      String-Concept-1.js
 *              length (property)
 *              toUpperCase()
 *              toLowerCase()
 *              startsWith()
 *      String-Concept-2.js
 *              endsWith()
 *              includes()
 *              concat()
 *              trim()
 *              charAt()
 *              indexOf()
 *              lastIndexOf()
 *              replace()
 *              padStart()
 *              padEnd()
 *      String-Concept-3.js
 *              localeCompare()
 *              substring()/slice()
 *              split()
 * 
 */


/**
 * To compare if two String values are equal to each other
 * function: localeCompare()
 * input: String you want to compare
 * return: number
 * 
 * If both strings are identical        ->  function returns 0
 * If string is greater than another    ->  function returns 1
 * If string is lesser than another     ->  function returns -1
 */
console.log('*** localeCompare() ***');

let sentence1 = "New York City";
let sentence2 = "new YorK CIty";
console.log(`\nsentence1 -> ${sentence1}`);
console.log(`sentence2 -> ${sentence2}`);
let isEqual = sentence1.localeCompare(sentence2);
console.log(`is sentence1 equal to sentence2 -> ${isEqual}`);



sentence1 = "New York City";
sentence2 = "new YorK CIty";
/**
 * Find if two strings are equal to each other (ignoring cases)
 */
let sent1Lowercase = sentence1.toLowerCase();
let sent2Lowercase = sentence2.toLowerCase();
let isEqual1 = sent1Lowercase.localeCompare(sent2Lowercase);
console.log(`is sentence1 equal to sentence2 (ignoring cases) -> ${isEqual1}`);

/**
 * To a piece from your string
 *      OR
 * To extract a portion of your string
 * function: substring() / slice() / substr()
 * 
 * "New York City"
 * give me from starting index-1 to index-7 (excluding index-7)  ->  'ew Yor'
 * 
 * give me starting from index-4 -> 'York City'
 *
 * give me the first-Character from the String
 * give me from starting index-0 to index-1 (excluding index-1)  ->  'N'
 */
/**
 * To extract a part of string from a given string using index-values
 * function: substring()
 * input: startIndex, endIndex
 * return: function returns the portion of string starting from startIndex and upto endIndex (excluding endIndex)
 * 
 * input: startIndex
 * return: function returns the portion of string starting from startIndex and upto end
 * 
 * NOTE: substring() does NOT change the original string value
 * 
 * if end-index is missing or invalid           ->      function returns upto the end
 * if start-index AND end-index are invalid     ->      function returns empty string
 * if start-index is invalid                    ->      function returns from 0 to end-index
 * 
 * 
 */
console.log('\n\n*** substring() ***');
let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

let subString_0_4 = sentence.substring(0, 4);   // 0,1,2,3  -> 'Comp'
console.log(`\nsubString_0_4 -> ${subString_0_4}`);

let substring_2 = sentence.substring(2);
console.log(`substring_2 -> ${substring_2}`);

let substring_0_1 = sentence.substring(0, 1);
console.log(`substring_0_1 -> ${substring_0_1}`);

// find the last-charcater in the string using substring()
let lastIndex = sentence.length-1
let substring_lastIndex = sentence.substring(lastIndex);
console.log(`substring_lastIndex -> ${substring_lastIndex}`);

sentence = 'Hello World';
console.log(`\nsentence -> ${sentence}`);

let substring_150_160 = sentence.substring(150, 160);           // ''
console.log(`substring_150_160 -> ${substring_150_160}`);

let substring_3_55 = sentence.substring(3, 55);                 // 3 to end
console.log(`substring_3_55 -> ${substring_3_55}`);

let substring__3_8 = sentence.substring(-3, 8);                 // 0 to 7 (substring always stop 1-before the end-index)
console.log(`substring__3_8 -> ${substring__3_8}`);


console.log(`\n Q: Convert the word into Titlecase format\n`);
/**
 * Convert the word into Titlecase format
 * 
 * hElLo        ->      Hello
 * birThDay     ->      Birthday
 */
let word = 'terMINAl';
console.log(`word -> ${word}`);     // QueeN
/**
 * convert word in to lowercase (wordLowercase = queen)
 * wordLowercase.substring(0,1)   ->  q
 * q into Uppercase -> Q (a)
 * 
 * wordLowercase.substring(1)   ->  ueen (b)
 * 
 * a + b    =   Queen
 * 
 * word = a + b
 */
let wordLowercase = word.toLowerCase();

// let temp = wordLowercase.substring(0,1)
// let a = temp.toUpperCase();

// let a = wordLowercase.substring(0,1).toUpperCase();
// let b = wordLowercase.substring(1);

word = wordLowercase.substring(0,1).toUpperCase() + wordLowercase.substring(1);
console.log(`word -> ${word}`);     // Queen


/**
 * function: slice()
 * input: startIndex, endIndex
 * return: function returns the portion of string starting from startIndex and upto endIndex (excluding endIndex)
 * 
 * input: startIndex
 * return: function returns the portion of string starting from startIndex and upto end
 * 
 * NOTE: slice() does NOT change the original string value
 * 
 * if end-index is missing or invalid           ->      function returns upto the end
 * if start-index AND end-index are invalid     ->      function returns empty string
 * if start-index is invalid                    ->      function returns empty string
 * 
 */
console.log('\n\n*** slice() ***');
sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

let slice_0_4 = sentence.slice(0, 4);   // 0,1,2,3  -> 'Comp'
console.log(`\nslice_0_4 -> ${slice_0_4}`);

let slice_2 = sentence.slice(2);
console.log(`slice_2 -> ${slice_2}`);

let slice_0_1 = sentence.slice(0, 1);
console.log(`slice_0_1 -> ${slice_0_1}`);

// find the last-charcater in the string using slice()
let lastIndex1 = sentence.length-1
let slice_lastIndex1 = sentence.slice(lastIndex1);
console.log(`slice_lastIndex1 -> ${slice_lastIndex1}`);

sentence = 'Hello World';
console.log(`\nsentence -> ${sentence}`);

let slice_150_160 = sentence.slice(150, 160);           // ''
console.log(`slice_150_160 -> ${slice_150_160}`);

let slice_3_55 = sentence.slice(3, 55);                 // 3 to end
console.log(`slice_3_55 -> ${slice_3_55}`);

let slice__3_8 = sentence.slice(-3, 8);                 // 0 to 7 (substring always stop 1-before the end-index)
console.log(`slice__3_8 -> ${slice__3_8}`);


/**
 * To split the string into multiple string-values
 *      OR
 * To cut the string into multiple string-values
 * function: split()
 * input: pattern from where to cut the string
 * return: Array (of string)
 * 
 * 
 * split()
 *      cut from the exact given pattern
 *      does NOT change the original string-value
 * 
 * 
 * 'new York city'  ->  'new'
 */
console.log('\n\n*** split() ***');
sentence = "Hello dear how are you doing";
let splitBy_o = sentence.split('o');
console.log(`splitBy_o -> ${splitBy_o}`);

let sentence_splitBy_space = sentence.split(' ');                   // [Hello, dear, how, are, you, doing]
console.log(`sentence_splitBy_space -> ${sentence_splitBy_space}`);

let sentence_splitBy_nothing = sentence.split('');                  // [H, e, l, l, o,  , d, e, a, r,  ,h, o, w,  , y, o,....]
console.log(`sentence_splitBy_nothing -> ${sentence_splitBy_nothing}`);

let sentence_splitBy_ho = sentence.split('ho');
console.log(`sentence_splitBy_ho -> ${sentence_splitBy_ho}`);       // ['Hello dear ', 'w are you doing']

let sentence_splitBy_on = sentence.split('on');
console.log(`sentence_splitBy_on -> ${sentence_splitBy_on}`);       // ['Hello dear how are you doing']

