const Student = require('./Student');

const s1 = new Student();
s1.enroll('John Doe', 16, 'manUaL QA');

const s2 = new Student();

const s3 = new Student();

s2.enroll('Jia Quicker', 22, 'sdET cOurse');

s1.showMyDetails();

s2.showMyDetails();

s3.enroll('Trio Grewer', 19, 'wEB DEVELOpmenT');
s3.showMyDetails();

Student.msgFromClass2023('Bye Bye');

const s4 = new Student();
s4.enroll('Liza', 14, 'Web Development');

const s5 = new Student();

// Constructors and Exceptions
s4.showMyDetails();


s5.showMyDetails();


s2.showMyDetails();