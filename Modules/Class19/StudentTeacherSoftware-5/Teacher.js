const Member = require("./Member");
const Student = require("./Student");

class Teacher extends Member {

    // // static-variable
    static #courseData = [
        { 
            cName: 'Web Development',
            cSalary: 15000
        },
        { 
            cName: 'SDET Course',
            cSalary: 14000
        },
        { 
            cName: 'Backend Development',
            cSalary: 13000
        },
        { 
            cName: 'FrontEnd Development',
            cSalary: 12000
        },
        { 
            cName: 'Manual QA',
            cSalary: 10000
        }
    ]
    static #teacherIdCounter = 0;

    /**
     * Like studentInfo, we need teacherInfo
     *          tId: 0,
                tName: 'Default Name',
                tAge: 0,
                tCourseName: 'Default Course Name',
                tSalary: 0
     */
    #teacherInfo = {
        tId: 0,
        tName: 'Default Name',
        tAge: 0,
        tCourseName: 'Default Course Name',
        tSalary: 0
    }

    constructor(name, age, courseName) {
        if (age < 21) {
            console.log('\nSorry: We only hire who is 21 or above');
            throw 'Invalid teacher age';
        } else if (!Teacher.#isCourseValid(courseName)) {
            console.log(`\nSorry: We don't have any course for ${courseName}`);
            throw 'Invalid coursename by teacher-candidate';
        } else {
            super(name, age);
            const courseObject = Teacher.#isCourseValid(courseName);
            this.#teacherInfo.tCourseName = courseObject.cName;
            this.#teacherInfo.tSalary = courseObject.cSalary;
            Teacher.#teacherIdCounter++;
            this.#teacherInfo.tId = Teacher.#teacherIdCounter;
            console.log(`\nCongratulations to be part of the institute for '${courseObject.cName}' course`);
            console.log(`Your teacher id: ${this.#teacherInfo.tId}`);
        }
    }

    showMyDetails() {
        console.log(`\nTeacher Info:`);
        console.log(`Id : ${this.#teacherInfo.tId}`);
        super.showMyDetails();
        console.log(`Course name : ${this.#teacherInfo.tCourseName}`);
        console.log(`Salary : $${this.#teacherInfo.tSalary}`);
    }

    gradeStudent(studentId, studentGrade) {
        /*
            using studentId find the studentInfo
        */
       const studentInfoObject = Student.findStudentInfoObjectById(studentId);
       if (!studentInfoObject) {
            console.log(`\nIncorrect student id "${studentId}" provided`);
       } else if (studentInfoObject.sGrade.localeCompare('-') !== 0) {
            console.log(`\nStudent with id "${studentId}" is already graded; to update student-grade pls use updateGrade-method`);
       } else {
            studentInfoObject.sGrade = studentGrade;
            console.log(`\nThank you for grading student with id = ${studentId}`);
       }
    }

    static #isCourseValid(courseName) {
        return Teacher.#courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
    }

}
module.exports = Teacher;