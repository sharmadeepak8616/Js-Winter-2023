const Student = require("./Student");

class Teacher {

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

    static #teacherIdCounter = 0;

    constructor(name, age, courseName) {
        if (age < 21) {
            console.log('\nSorry: We only hire who is 21 or above');
            throw 'Invalid teacher age';
        } else if (!this.#isCourseValid(courseName)) {
            console.log(`\nSorry: We don't have any course for ${courseName}`);
            throw 'Invalid coursename by teacher-candidate';
        } else {
            this.#teacherInfo.tName = name;
            this.#teacherInfo.tAge = age;
            const courseObject = this.#isCourseValid(courseName);
            this.#teacherInfo.tCourseName = courseObject.cName;
            this.#teacherInfo.tSalary = courseObject.cSalary;
            Teacher.#teacherIdCounter++;
            this.#teacherInfo.tId = Teacher.#teacherIdCounter;
            console.log(`\nCongratulations to be part of the institute for '${courseObject.cName}' course`);
            console.log(`Your teacher id: ${this.#teacherInfo.tId}`);
        }
    }

    #isCourseValid(courseName) {
        return Teacher.#courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
    }

    showMyDetails() {
        console.log(`\nTeacher Info:`);
        console.log(`Id : ${this.#teacherInfo.tId}`);
        console.log(`Name : ${this.#teacherInfo.tName}`);
        console.log(`Course name : ${this.#teacherInfo.tCourseName}`);
        console.log(`Salary : $${this.#teacherInfo.tSalary}`);
    }

    changeName(newName) {
        if (newName.localeCompare(this.#teacherInfo.tName) === 0) {
            console.log(`\nName cannot be updated; as you have same name already stored in the system.`);
        } else {
            this.#teacherInfo.tName = newName;
            console.log(`\nYour name in the system is updated to '${newName}'`);
        }
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


}
module.exports = Teacher;