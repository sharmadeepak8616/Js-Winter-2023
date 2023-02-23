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

    courseData = [
        { 
            cName: 'Web Development',
            cPrice: 4000
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

    //  Global variable
    studentInfo = {
        sId: 0,
        sName: '',
        sAge: 0,
        sCourseName: '',
        sBalance: 0,
        sGrade: ''
    }

    studentName = 'Default Name';
    studentAge = -1;
    studentCourseName = 'Default Course Name';
    studentBalance = -1;


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
            console.log('Sorry: We only enroll who are 16 or above');
        } else if (!this.isCourseValid(courseName)) {
            console.log("We don't have any course for courseName");
        } else {
            studentName = name;
            studentAge = age;
            const courseObject = this.isCourseValid(courseName);
            studentCourseName = courseObject.cName;
            studentBalance = courseObject.cPrice;
            console.log(`Congratulations for enrolling in ${courseObject.cName} course`);
            console.log(`Your student id: Coming Soon`);
        }
    }


    showMyDetails() {
        console.log(`Id : Coming Soon`);
        console.log(`Name : ${studentName}`);
        console.log(`Course name : ${studentCourseName}`);
        console.log(`Balance : ${studentBalance}`);
    }


    isCourseValid(courseName) {
        return courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
    }

}
module.exports = Student;