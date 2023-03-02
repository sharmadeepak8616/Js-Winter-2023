/**
 * OOPS - Concept (Polymorphism)
 * Exceptions (try-catch)
 * 
 */

const Student = require("../Class19/StudentTeacherSoftware-5/Student");

/**
 * Exceptions - unexpected situation.
 *              in unexpected situation (where program doesn't know what to do...then program crashes (stops working suddenly))
 * 
 */

try {
    const s1 = new Student('Deepak', 22, 'ABC Course');
} catch(e) {
    console.log('Cannot enroll due to above reason.');
}