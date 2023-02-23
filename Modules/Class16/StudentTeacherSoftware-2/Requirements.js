/**
 * Write software for maintaining the records of Student, Teacher.
 * 
 * Students can perform:
 *      enrollInCourse      (this is one time action done by student)
 *          1. age >= 16
 *          2. student has to provide a valid course name and available in the institute
 *          At the end of enrollment process, student will get it's unique-id number like below:
 *          Congratulations for enrolling in courseName
 *          Your student id : XX
 * 
 *          In case student age is not valid, show error like:
 *          We only enroll who are 16 or above 
 * 
 *          In case courseName is not valid, show error like:
 *          We don't have any course for courseName
 * 
 *      check their details
 *          Print details like:
 *          Id: XX
 *          Name: Abc Def
 *          Course name: courseName
 *          Balance: 
 *
 *      changeName (use if a student would like to change the name in the system)
 *          if new-name provided by student is exactly saved in the system (studentInfo.sName)
 *              print msg: Name cannot be updated; as you have same name already stored in the system.
 *          otherwise
 *              store new-name in studentInfo.sName
 *              print msg: Your name in the system is updated to new-name
 * 
 *      changeCourse (use if a student would like to change the course)
 *          if new-course-name is NOT valid (or not available in the institute)
 *              print msg: Institute does not provide any course on new-course-name
 *          if student is already enrolled in the course
 *              print msg: You are already enrolled in the course
 *          otherwise
 *              store new-course-name in studentInfo.sCourseName
 *              store new-course-amount in studentInfo.sBalance
 *              print msg: Your course in the system is updated to new-course-name
 *              print msg: Your updated balance is new-course-amount
 * 
 *      makePayment
 *          if amount is invalid (means less or equal to zero)
 *              print msg: Pls provide a valid amount for payment
 *          otherwise amount is valid and greater than balance
 *              print msg: You cannot pay more than the balance amount ($XXX.YY)
 *          otherwise amount is valid and less or equal to balance
 *              update studentInfo.sBalance as per the payment amount
 *              print msg: Thank you for the payment. Your updated balance is $XXX.YY
 * 
 *
 */

/**
 * Student (properties, actions)
 * Teachers (properties, actions)
 * Admin (properties, actions)
 * HR (properties, actions)
 */