
// Due date: Jan 30 (eod)

const Student = require("../Class18/StudentTeacherSoftware-4/Student");

/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */


/**
 * '' into words (split by space)   ['', '']
 * number of words must be equal to 2   length of array === 2
 */
let userName1 = 'John Gig';
let userName1Split = userName1.split(' ');
let result1 = userName1Split.length === 2
console.log(`userName1 -> ${userName1}`);
console.log(`the user has provided only first name and last Name -> ${result1}\n\n`);


/**
 * Q2: Create abbreviation for a 4-word sentence
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 */
let sentence2 = 'Queen king palace castle'
let abbr = '';
// code
console.log(`abbr -> ${abbr}`);     // YNWA



/**
 * Q3: Count the number of words in the sentence
 */
let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';



const student1 = new Student('Kiara', 22, "Web DeveloPMEnT");
student1.changeCourse('');
student1.changeName('');
