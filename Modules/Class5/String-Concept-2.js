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
 * 
 */

let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);
/**
 * To find if the given String ends with given pattern
 * function: endsWith()
 * input: pattern
 * return: boolean
 * 
 * if the String ends EXACTLY with the given pattern
 *      function returns true
 * otherwise
 *      function returns false
 */
console.log('\n** function - endsWith **');

let endsWith_News = sentence.endsWith('News');
console.log(`is sentence end with "News" -> ${endsWith_News}`);                 // false

let endsWith_NeWs = sentence.endsWith('NeWs');
console.log(`is sentence end with "NeWs" -> ${endsWith_NeWs}`);                 // false

let endsWith_Ogle_NeWs = sentence.endsWith('Ogle NeWs.');
console.log(`is sentence end with "Ogle NeWs." -> ${endsWith_Ogle_NeWs}`);      // true


/**
 * Find if the stmt starts with "Go tO" (ignoring cases)
 * 
 * expected ans: true
 */
let stmt = "Go to NBCNews.com for breaking news, videos";
/**
 * 1. stmt-intoLowercase()
 *      go to nbcnews.com for breaking news, videos
 * 
 * 2. converted pattern into lowercase
 *      go to
 * 3. applied startsWith-function on lowercased values
 * 
 */
let stmt_LowerCase = stmt.toLowerCase();
let pattern_LowerCase = "Go tO".toLowerCase();
let result = stmt_LowerCase.startsWith(pattern_LowerCase);
console.log('\nFind if the stmt starts with "Go tO" (ignoring cases)');
console.log(`stmt -> ${stmt}`);
console.log(`pattern -> 'Go tO'`);
console.log(`stmt starts with "Go tO" (ignoring cases) -> ${result}`);

/**
 * To find if the given String includes (or contains) a given pattern
 * function: includes()
 * input: pattern
 * return boolean
 * 
 * if the String EXACTLY includes/contains the given pattern
 *      function returns true
 * otherwise
 *      function returns false
 */
// let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

console.log('\n** function - includes **');

let includes_Date = sentence.includes('Date');
console.log(`is sentence include "Date" -> ${includes_Date}`);          // false

let includes_eS_al = sentence.includes('eS al');
console.log(`is sentence include "eS al" -> ${includes_eS_al}`);        // true

let includes_NeWs = sentence.includes('NeWs.');
console.log(`is sentence include "NeWs." -> ${includes_NeWs}`);         // true

/**
 * To join/concatenate two or more Strings
 * function: concat()
 * 
 * function will join/attached the String together
 * and, return the combined-String
 * 
 */
console.log('\n** function - concat **');
let str1='Hello', str2='Dear', str3=',', str4=' How are', str5='you', str6='?', str7=' ';

console.log(`\nstr1 -> ${str1}`);
console.log(`str2 -> ${str2}`);
console.log(`str3 -> ${str3}`);
console.log(`str4 -> ${str4}`);
console.log(`str5 -> ${str5}`);
console.log(`str6 -> ${str6}`);
console.log(`str7 -> ${str7}`);
let str = str1.concat(str7,str2, str7, str3, str4);       // Hello Dear , How are
console.log(`\nstr1.concat(str7, str2, str7, str3, str4) -> ${str}`);

let strr = str1+str7+str2+str7+str3+str4;
console.log(`\nstr1+str7+str2+str7+str3+str4 -> ${strr}`);

/**
 * To remove the extra spaces from the String
 *      any number of spaces, before the first-character in the String
 *      AND, any number of spaces after the last-character in the String
 * function: trim()
 * 
 *      copies the String-value, removes extra-spaces from the copied-value
 *      and return the result.
 *      Therefore, the original String does NOT change.
 * 
 */     
console.log('\n** function - trim **\n');

let stmt1 = ' hello     Dear HoW    are    you     doing      .    '
console.log('*' + stmt1 + '*');

let stmt1_trim = stmt1.trim();
console.log('\n*' + stmt1_trim + '*');
console.log('\n*' + stmt1 + '*');


// let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

// which character is present at index-19
/**
 * To find the character present at any given index
 * function: charAt()
 * input: indexNum
 * return: String
 * 
 * if the index is valid
 *      function returns the character present at the given index
 * otherwise
 *      function returns empty-string
 */
console.log('\n** function - charAt **\n');

let charAt19 = sentence.charAt(19);
console.log(`Char at index-19 -> ${charAt19}`);

let charAt31 = sentence.charAt(31);
console.log(`Char at index-31 -> ${charAt31}`);

let charAt1 = sentence.charAt(1);
console.log(`Char at index-1 -> ${charAt1}`);

let charAt900 = sentence.charAt(900);           // beyond the range
console.log(`Char at index-900 -> ${charAt900}`);

let charAt_4 = sentence.charAt(-4);             // invalid index
console.log(`Char at index-(minus 4) -> ${charAt_4}`);

sentence = 'Hello Dear, How ar eyou?';
/**
 * Find the character present at the LAST-index of the String
 * 
 * find the character present at last-index
 * lIndex = length - 1
 * charAt(lIndex)
 * 
 */
console.log(`\nsentence -> ${sentence}`);
let lIndex = sentence.length - 1;
let charAtLastIndex = sentence.charAt(lIndex);
console.log(`\nCharacter present at the LAST-index of the String -> ${charAtLastIndex}`);

/**
 * To find at which index the given pattern is present
 * function: indexOf()
 * input: pattern
 * return: indexNum
 * 
 * if the EXACT pattern is found
 *      function returns the index of FIRST OCCURRENCE
 * otherwise
 *      function returns -1
 */
sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE neWs aggRegateD frOM SoURCeS alL oVeR tHE wORld by GOOgle NeWS.';
console.log(`\nsentence -> ${sentence}`);

console.log('\n** function - indexOf **\n');

let indexOf_P = sentence.indexOf('P');                  // 15
console.log(`Index of 'P' -> ${indexOf_P}`);

let indexOf_S = sentence.indexOf('S');                  // 9
console.log(`Index of 'S' -> ${indexOf_S}`);

let indexOf_Co = sentence.indexOf('Co');                // 0
console.log(`Index of 'Co' -> ${indexOf_Co}`);

let indexOf__Date = sentence.indexOf('-DATE');          // 19
console.log(`Index of '-DATE' -> ${indexOf__Date}`);

let indexOf_News = sentence.indexOf('News');            // -1
console.log(`Index of 'News' -> ${indexOf_News}`);

/**
 * To find at which index the given pattern is present as a LAST occurrence
 * function: lastIndexOf()
 * input: pattern
 * return: indexNum
 * 
 * if the EXACT pattern is found
 *      function returns the index of LAST OCCURRENCE
 * otherwise
 *      function returns -1
 */
sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE neWs aggRegateD frOM SoURCeS alL oVeR tHE wORld by GOOgle NeWS.';
console.log(`\nsentence -> ${sentence}`);

/**
 * 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE 
 * neWs aggRegateD frOM SoURCeS alL oVeR tHE wORld by GOOgle NeWS.';
 * 
 */
console.log('\n** function - lastIndexOf **\n');

let lastIndexOf_P = sentence.lastIndexOf('P');
console.log(`Last index of 'P' -> ${lastIndexOf_P}`);

let lastIndexOf_S = sentence.lastIndexOf('S');
console.log(`Last index of 'S' -> ${lastIndexOf_S}`);

let lastIndexOf_Co = sentence.lastIndexOf('Co');
console.log(`Last index of 'Co' -> ${lastIndexOf_Co}`);

let lastIndexOf_News = sentence.lastIndexOf('News');
console.log(`Last index of 'News' -> ${lastIndexOf_News}`);

/**
 * Find the index of 'News' (ignoring cases) in sentence.
 * 
 * convert String-values in SAME CASE level (lowercase)
 * to find indexOf something in a String -> indexOf
 */
console.log("\nQ: Find the index of 'News' (ignoring cases) in sentence.");
sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE neWs aggRegateD frOM SoURCeS alL oVeR tHE wORld by GOOgle NeWS.';
console.log(`\nsentence -> ${sentence}`);

let sentenceLowerCase = sentence.toLowerCase();         // comprehensive up-to-date news coverage....
let patternLowerCase = 'News'.toLowerCase();            // news

let indexOf_News_IgnoringCases = sentenceLowerCase.indexOf(patternLowerCase);
console.log(`Index of 'News' (ignoring cases) in sentence -> ${indexOf_News_IgnoringCases}`);

/**
 * To replace a pattern with another pattern in a String
 * function: replace()
 * input: patternToReplace, patternReplaceWith
 * return: Updated String
 *
 *      copies the original String, replaces the EXACT pattern in the copied value and return the result
 *      Therefore, does NOT change the original String value
 * 
 *      -> by default, function replaces ONLY the FIRST occurrence.
 *      -> To replace ALL occurrences, we should use g-flag
 *      -> To replace with ignoring cases, we should use i-flag
 * 
 */
sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE neWs aggRegateD frOM SoURCeS alL oVeR tHE wORld by GOOgle NeWS.';
console.log(`\nsentence -> ${sentence}`);

console.log('\n** function - replace **\n');

let sentence_Replace_A_B = sentence.replace('A', 'B');
console.log(`sentence after replace 'A' with 'B' -> ${sentence_Replace_A_B}`);

let sentence_Replace_AllA_B = sentence.replace(/A/g, 'B');
console.log(`\nsentence after replace /A/g with 'B' -> ${sentence_Replace_AllA_B}`);

let sentence_EW_MyCalendar = sentence.replace(/EW/i, 'My Calendar');                                 // replace first Occurrence of EW (ignoring cases) with My Calendar
console.log(`\nsentence after replace /EW/i with 'My Calendar' -> ${sentence_EW_MyCalendar}`);

let sentence_AllEW_MyCalendar = sentence.replace(/EW/ig, 'My Calendar');                                 // replace ALL Occurrence of EW (ignoring cases) with My Calendar
console.log(`\nsentence after replace /EW/ig with 'My Calendar' -> ${sentence_AllEW_MyCalendar}`);

/**
 * To increase the overall length of the String by adding a given character
 * function:
 *      padStart()
 *      padEnd()
 */
/**
 * padStart()
 *      adds the padding in the beginning to increase the length of String (if required)
 * input: newLength, patternToAdd
 * return: updateString
 * 
 *      copies the original String-value, adds pattern in the beginning (if required) to make length equals to desiredLength
 *      and returns the result.
 * 
 * 
 * hello
 * 
 * make the length of this string to 8, by adding $ in the beginning
 * 
 * $$$hello
 * 
 * 'Hello World'
 * make the length of String to 9, by adding A in the beginning
 * 
 */
console.log('\n** function - padStart **\n');
sentence = "Hello";
console.log(`sentence -> ${sentence}`);
let sentence_8_$ = sentence.padStart(8, '$');
console.log(`\nsentence after adding '$' to make length=8 -> ${sentence_8_$}`);

sentence = "Hello World";
console.log(`sentence -> ${sentence}`);
let sentence_9_A = sentence.padStart(9, 'A');
console.log(`\nsentence after adding 'A' to make length=9 -> ${sentence_9_A}`);

sentence = "Hello World";
console.log(`sentence -> ${sentence}`);
let sentence_16_AB = sentence.padStart(16, 'AB');               // "ABABAHello World"
console.log(`\nsentence after adding 'AB' to make length=16 -> ${sentence_16_AB}`);

/**
 * padEnd()
 *      adds the padding in the end to increase the length of String (if required)
 * input: newLength, patternToAdd
 * return: updateString
 * 
 *      copies the original String-value, adds pattern in the end (if required) to make length equals to desiredLength
 *      and returns the result.
 * 
 * 
 * hello
 * 
 * make the length of this string to 8, by adding $ in the end
 * 
 * hello$$$
 * 
 * 'Hello World'
 * make the length of String to 9, by adding A in the end
 * 
 */

console.log('\n** function - padEnd **\n');
sentence = "Hello";
console.log(`sentence -> ${sentence}`);

let sentence_padEnd_8_$ = sentence.padEnd(8, '$');        // Hello$$$
console.log(`\nsentence after adding '$' to make length=8 -> ${sentence_padEnd_8_$}`);

sentence = "Hello World";
console.log(`sentence -> ${sentence}`);
let sentence_padEnd_9_A = sentence.padEnd(9, 'A');
console.log(`\nsentence after adding 'A' to make length=9 -> ${sentence_padEnd_9_A}`);

sentence = "Hello World";
console.log(`sentence -> ${sentence}`);
let sentence_padEnd_16_AB = sentence.padEnd(16, 'AB');               // "ABABAHello World"
console.log(`\nsentence after adding 'AB' to make length=16 -> ${sentence_padEnd_16_AB}`);
