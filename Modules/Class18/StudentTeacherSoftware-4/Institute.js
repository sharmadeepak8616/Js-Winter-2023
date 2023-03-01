const Student = require('./Student');
const Teacher = require('./Teacher');

let s1;
let s2;

try {

    s1 = new Student('John Doe', 22, 'manUaL QA');

    s1.showMyDetails();

    const t1 = new Teacher('Fahid', 24, 'Web DevelOPMent');

    t1.showMyDetails();

    t1.gradeStudent(1, 'A');

    s1.showMyDetails();

    s2 = new Student('Jia Quicker', 22, 'sdET cOurse');

    s2.showMyDetails();

    t1.gradeStudent(2, 'A+');

    s2.showMyDetails();

    t1.gradeStudent(3, 'A+');

    t1.gradeStudent(1, 'A+');

} catch (e) {
    console.log("Process cannot be completed at this try due to above reason.");
}


// try {
//     s2 = new Student('Jia Quicker', 22, 'sdET cOurse');

//     s2.showMyDetails();
    
// } catch (e) {
//     console.log("Enrollment process cannot be completed at this try due to above reason.");
// }


// // const s1 = new Student('John Doe', 12, 'manUaL QA');    // s1 was created

// // const s2 = new Student('Jia Quicker', 22, 'sdET cOurse');

// s2.makePayment(200);

// s1.showMyDetails();

// s2.showMyDetails();
// s1.showMyDetails();

// s1.changeName('JOHN DOE BREW');

// s1.showMyDetails();

// s1.changeCourse('MaNUal QA');

// s1.showMyDetails();

// s1.changeCourse('BackENd DevElOpmEnt');

// s1.showMyDetails();

// s1.makePayment(-100);

// s1.showMyDetails();

// s1.makePayment(100);

// s1.showMyDetails();



// const s3 = new Student();


// s1.showMyDetails();

// s2.showMyDetails();

// s3.enroll('Trio Grewer', 19, 'wEB DEVELOpmenT');
// s3.showMyDetails();

// Student.msgFromClass2023('Bye Bye');

// const s4 = new Student();
// s4.enroll('Liza', 14, 'Web Development');

// const s5 = new Student();

// // Constructors and Exceptions
// s4.showMyDetails();


// s5.showMyDetails();


// s2.showMyDetails();

