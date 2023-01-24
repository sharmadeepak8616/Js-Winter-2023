/**
 * Ternary (?:)
 *      used in situation where you have TWO-values, and one of the values can be assigned to variable depending on the condition(s)
 * 
 * 
 * Bank:
 *      credit score more than or equals 700
 *          mortgage as 5.5
 *      otherwise
 *          mortgage as 6.5
 * 
 * 
 * creditScore = ABC
 * mortgageRate = -
 * 
 * creditScore >= 700
 * 
 * 
 * Syntax:
 * varName = condition(s) ? valueIfTrue : valueIfFalse
 * 
 */
/**
 * Bank:
 *      credit score more than or equals 700
 *          mortgage as 5.5
 *      otherwise
 *          mortgage as 6.5
 */
let creditScore = 699;
let mortgageRate = creditScore >= 700 ? 5.5 : 6.5;
console.log(`\nCredit score -> ${creditScore}`);
console.log(`Mortgage score -> ${mortgageRate}`);

/**
 * Bank:
 *      credit score more than or equals 750 OR credit score more than or equals 600 and you are first time buyer
 *          mortgage as 5.5
 *      otherwise
 *          mortgage as 6.5
 */
let creditScore1 = 710;
let isFirstHomeBuyer = false;

// let mortgageRate1 = creditScore1 >= 750 || (creditScore1>=600 && isFirstHomeBuyer === true) ? 5.5 : 6.5;
let mortgageRate1 = creditScore1 >= 750 || (creditScore1>=600 && isFirstHomeBuyer) ? 5.5 : 6.5;
console.log(`\nCredit score1 -> ${creditScore1}`);
console.log(`is first time home buyer? -> ${isFirstHomeBuyer}`);
console.log(`Mortgage score1 -> ${mortgageRate1}`);

/**
 *      isFirstHomeBuyer = true
 * 
 *      isFirstHomeBuyer === true           // isFirstHomeBuyer           
 *      true === true
 *      true
 *      
 * 
 * 
 *      isFirstHomeBuyer = false
 * 
 *      isFirstHomeBuyer === true           // isFirstHomeBuyer             
 *      false === true
 *      false
 * 
 *      instead isFirstHomeBuyer === true, we can write isFirstHomeBuyer 
 * let mortgageRate1 = creditScore1 >= 750 || (creditScore1>=600 && isFirstHomeBuyer) ? 5.5 : 6.5;
 * 
 * 
 * 
 * 
 * 
 * 
 *      isFirstHomeBuyer = true
 * 
 *      isFirstHomeBuyer !== true               // !isFirstHomeBuyer            isFirstHomeBuyer === false           
 *      true !== true
 *      false
 * 
 * 
 *      isFirstHomeBuyer = false
 * 
 *      isFirstHomeBuyer !== true               // !isFirstHomeBuyer            isFirstHomeBuyer === false
 *      false !== true
 *      true
 * 
 *      instead isFirstHomeBuyer !== true, we can write !isFirstHomeBuyer
 * 
 *      
 */




