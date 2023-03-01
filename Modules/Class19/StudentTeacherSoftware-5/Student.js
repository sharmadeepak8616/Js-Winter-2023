/**
 * Student Properties: (Global variables)
 *      id
 *      name
 *      age
 *      courseName
 *      balance
 * 
 * Student Actions: (Functions)
 *      enroll
 *      showMyDetails
 */

const Member = require("./Member");


class Student extends Member {

    // // static-variable
    static #courseData = [
        { 
            cName: 'Web Development',
            cPrice: 5000
        },
        { 
            cName: 'SDET Course',
            cPrice: 4000
        },
        { 
            cName: 'Backend Development',
            cPrice: 3000
        },
        { 
            cName: 'FrontEnd Development',
            cPrice: 2000
        },
        { 
            cName: 'Manual QA',
            cPrice: 1000
        }
    ]
    static #studentIdCounter = 0;
    static #allStudentInfo = []; // [studentInfo, studentInfo, studentInfo, studentInfo, ...]
    
    #studentInfo = {
        sId: 0,
        sName: 'Default Name',
        sAge: 0,
        sCourseName: 'Default Course Name',
        sBalance: 0,
        sGrade: '-'
    }

    constructor(name, age, courseName) {
        if (age < 16) {
            console.log('\nSorry: We only enroll who are 16 or above');
            throw 'Invalid student age'
        } else if (!Student.#isCourseValid(courseName)) {
            console.log(`\nSorry: We don't have any course for ${courseName}`);
            throw 'Invalid course name by prospect-student'
        } else {
            super(name, age);
            const courseObject = Student.#isCourseValid(courseName);
            this.#studentInfo.sCourseName = courseObject.cName;
            this.#studentInfo.sBalance = courseObject.cPrice;
            Student.#studentIdCounter++;
            this.#studentInfo.sId = Student.#studentIdCounter;
            Student.#allStudentInfo.push(this.#studentInfo);
            console.log(`\nCongratulations for enrolling in '${courseObject.cName}' course`);
            console.log(`Your student id: ${this.#studentInfo.sId}`);
        }
    }

    showMyDetails() {
        console.log(`\nStudent Info:`);
        console.log(`Id : ${this.#studentInfo.sId}`);
        super.showMyDetails();
        console.log(`Course name : ${this.#studentInfo.sCourseName}`);
        console.log(`Balance : $${this.#studentInfo.sBalance}`);
        console.log(`Last grade received : ${this.#studentInfo.sGrade}`);
    }

    changeCourse(newCourse) {
        if (!this.isCourseValid(newCourse)) {
            console.log(`\nInstitute does not provide any course on '${newCourse}'`);
        } else if (this.#studentInfo.sCourseName.toLowerCase().localeCompare(newCourse.toLowerCase()) === 0) {
            console.log(`\nYou are already enrolled in the '${this.#studentInfo.sCourseName}' course`);
        } else {
            const courseObject = this.isCourseValid(newCourse);
            this.#studentInfo.sCourseName = courseObject.cName;
            this.#studentInfo.sBalance = courseObject.cPrice;
            console.log(`\nYour course in the system is updated to '${this.#studentInfo.sCourseName}'`);
            console.log(`Your updated balance is $${this.#studentInfo.sBalance}`);
        }
    }

    makePayment(amount) {
        if (amount <= 0) {
            console.log(`\nPls provide a valid amount for payment.`);
        } else if (amount > this.#studentInfo.sBalance) {
            console.log(`\nYou cannot pay more than the balance amount ($${this.#studentInfo.sBalance})`);
        } else {
            this.#studentInfo.sBalance -= amount;
            console.log(`\nThank you for the payment of $${amount}. Your updated balance is $${this.#studentInfo.sBalance}`);
        }
    }

    static findStudentInfoObjectById(studentId) {
        return Student.#allStudentInfo.find(sObject => sObject.sId === studentId);
    }

    static #isCourseValid(courseName) {
        return Student.#courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
    }

    static msgFromClass2023(msg) {
        console.log(`\n\nMsg from Class 2023:\n${msg}`);
    }


}
module.exports = Student;