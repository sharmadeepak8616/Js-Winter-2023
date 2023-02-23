/**
 * In a class any variable or function can be static.
 * 
 * If we want a variable to be shared between all objects of the class,
 *      we must make the variable as static-variable (using static keyword)
 *      eg: static studentIdCounter = 0;
 * 
 * 
 * All static variables (and functions) belong to class instead object.
 * All non-static variables (and functions) belong to the object.
 * 
 * 
 * If a static variable is changed by any object directly(indirectly); 
 *      the value gets changes for ALL objects.
 * 
 * 
 * To use static variable/function:
 *      we have to use ClassName instead objectName or this-operator.
 * 
 * If the purpose (or action) should be done by every student,
 *      then function should be NON-Static
 * 
 * If the purpose (or action) should be the entity in general
 *      then function should be Static
 */

/**
 * 
 * Accounts
 * 
 * accNumber
 * accBalance
 * accHolderName
 * bankName (static)
 * 
 * deposit()
 * withdraw()
 * checkBalance()
 * 
 */