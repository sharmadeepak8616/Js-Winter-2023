const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];

const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];

/**
 * Create a grading system software where students can enter their score and max-score.
 * Find out the student percentage, and grade based on below grading system.
 * 
 * Print result to student like:
 * Your percentage is XX.yy% and your grade is Z
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * 
 * 
 * var1 (studentScore)
 * var2 (maxScore)
 * 
 * var3 (studentGrade)
 * var4 (studentPercentage)
 *
 */

let studentScore, maxScore, studentGrade, studentPercentage;

studentScore = 120;
maxScore = 110;

studentPercentage = (studentScore/maxScore)*100;

if (studentPercentage > 100 || studentPercentage < 0) {

    console.log(`You have entered incorrect data.\nStudent score = ${studentScore}\nMax score = ${maxScore}`);

} else {

    if (studentPercentage >= 91) {
        studentGrade = 'A';
    } else if (studentPercentage >= 81) {
        studentGrade = 'B';
    } else if (studentPercentage >= 71) {
        studentGrade = 'C';
    } else if (studentPercentage >= 61) {
        studentGrade = 'D';
    } else if (studentPercentage >= 51) {
        studentGrade = 'E';
    } else {
        studentGrade = 'F';
    }

    console.log(`Your percentage is ${studentPercentage}% and your grade is ${studentGrade}`);

}

/*

    Create a software, based on the given day-name; print the task of the day.

    if day is Mon, Monday -> print ("Today is the Technosoft class")
    if day is Tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")    
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is Sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
    
    User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY   (mon/monday)

 */

console.log('\nQ: Create a software, based on the given day-name; print the task of the day. \n');

let dayName = 'SUNDAY';
console.log(`dayname -> ${dayName}`);

switch(dayName.toLowerCase()) {
    case 'mon':
    case 'monday':
    case 'wed':
    case 'wednesday':
    case 'fri':
    case 'friday':
        console.log("Today is the Technosoft class");
        break;
    case 'tue':
    case 'tuesday':
    case 'thu':
    case 'thursday':
        console.log("Today is self learning day");
        break;
    case 'sat':
    case 'saturday':
        console.log('Today is lab session day');
        break;
    case 'sun':
    case 'sunday':
        console.log('No study today');
        break;
    default:
        console.log("Entered day-value is not valid");
}


/*
    Based on the day-name and if user has meeting or not; 
    print whether user should work from home or go to office.

    mon, thur and there no meeting
        Work from home
    other weekdays or there is meeting
        Go to office
    weekends
        Enjoy
    


    day
    isMeeting = true (if there any meeting)
    isMeeting = false (if there any No meeting)

 */ 

console.log('\nQ: Based on the day-name and if user has meeting or not;\nPrint whether user should work from home or go to office.\n');

let day = 'frIY';
let isAnyMeeting = false;

switch (day.toLowerCase()) {
    case 'sunday':
    case 'saturday':
        console.log('Enjoy');
        break;
    case 'monday':
    case 'thursday':
        if (isAnyMeeting) {
            console.log('Go to office');
        } else {
            console.log('Work from home');
        }
        break;
    case 'tuesday':
    case 'wednesday':
    case 'friday':
        console.log('Go to Office');
        break;
    default:
        console.log(`Invalid day entered -> ${day}`);
        break;
}