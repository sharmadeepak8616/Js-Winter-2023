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


class Student {

    // // static-variable
    static courseData = [
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
    
    // static-variable
    static studentIdCounter = 0;
    
    studentInfo = {
        sId: 0,
        sName: 'Default Name',
        sAge: 0,
        sCourseName: 'FrontEnd Development',
        sBalance: 2000,
        sGrade: '-'
    }
    
    /**
    * 1. what is the purpose of the function?
    *      enroll
    * 2. Do I need any input from user? - Yes
    *      If yes,
    *          a) how manay inputs we need from user? name, age, courseName
    * 
    * 3. Should the function return any value back to user? - No
    * 
    */
    enroll(name, age, courseName) {
        if (age < 16) {
            console.log('\nSorry: We only enroll who are 16 or above');
        } else if (!this.isCourseValid(courseName)) {
            console.log(`\nSorry: We don't have any course for ${courseName}`);
        } else {
            this.studentInfo.sName = name;
            this.studentInfo.sAge = age;
            const courseObject = this.isCourseValid(courseName);
            this.studentInfo.sCourseName = courseObject.cName;
            this.studentInfo.sBalance = courseObject.cPrice;
            Student.studentIdCounter++;
            this.studentInfo.sId = Student.studentIdCounter;
            console.log(`\nCongratulations for enrolling in '${courseObject.cName}' course`);
            console.log(`Your student id: ${this.studentInfo.sId}`);
        }
    }


    showMyDetails() {
        console.log(`\nStudent Info:`);
        console.log(`Id : ${this.studentInfo.sId}`);
        console.log(`Name : ${this.studentInfo.sName}`);
        console.log(`Course name : ${this.studentInfo.sCourseName}`);
        console.log(`Balance : ${this.studentInfo.sBalance}`);
        console.log(`Last grade received : ${this.studentInfo.sGrade}`);
    }


    isCourseValid(courseName) {
        return Student.courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
    }

    // static-function
    static msgFromClass2023(msg) {
        console.log(`\n\nMsg from Class 2023:\n${msg}`);
    }


}
module.exports = Student;