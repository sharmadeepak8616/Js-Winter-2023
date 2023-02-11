/**
 * Functions
 *      set of code to perform a specifc task
 * 
 * Before we create a function:
 * 1. what is the purpose of the function?
 *      this helps in function name
 * 2. Do I need any input from user?
 *      If yes,
 *          a) how manay inputs we need from user?
 * 
 * 3. Should the function return any value back to user?
 *      If yes,
 *          make sure to write return statement as the last line in the function
 *      otherwise
 *          NO return statement in the function
 * 
 * 
 * 
 * Syntax to create a function:
 * 
 * #1:
 * function funcName(<inputParameters>) {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we are planning that function should return a vaule back to user (Q3); LAST LINE of the function.
 * }
 * 
 * funcName -> function-name (it should relate to the purpose of the function)
 * 
 * inputParameters -> Q2
 *      if we need input from user
 *          we need to create variable in the parenthesis
 *      else
 *          parenthesis will be empty
 * 
 */

/**
 * Create a function to find average of any given array
 * 
 * 1. what is the purpose of the function?
 *      getArrayAverage
 * 2. Do I need any input from user? - array
 *      If yes,
 *          a) how many inputs we need from user? - 1
 * 3. Should the function return any value back to user? - Yes
 *      the result of the function
 */
function getArrayAverage(inputArr) {
    let avg;
    let total = 0;
    for (let d=0 ; d <= inputArr.length-1 ; d++) {
        total = total + inputArr[d];
    }
    avg = total/inputArr.length;
    return avg;
}

const num1 = [1, 2, 3, 4, 5];
let result1 = getArrayAverage(num1);
console.log(num1);
console.log(result1);

const num2 = [1, 1, 1, 2, 3, 1, 2];
let result2 = getArrayAverage(num2);
console.log(num2);
console.log(result2);

const num3 = [1, -1];
let result3 = getArrayAverage(num3);
console.log(num3);
console.log(result3);


/**
 * Create a function to reverse a given string (word by word)
 * 
 * 1. what is the purpose of the function?
 *      reverseString
 * 2. Do I need any input from user? - Yes
 *      If yes,
 *          a) how many inputs we need from user? - 1
 * 
 * 3. Should the function return any value back to user? - Yes
 *      return the result of the function
 */
console.log('\n\nfunction to reverse a given string (word by word)');
function reverseString(inputStr) {
    let reverseStr2 = '';
    const arr2 = inputStr.split(' ');
    for (let m=arr2.length-1 ; m>=0 ; m--) {
        reverseStr2 = reverseStr2 + arr2[m] + " ";
    }
    return reverseStr2.trim();
}

console.log(reverseString('good Morning'));

const reverseStr1 = reverseString('hello Dear how are you doing');
console.log(reverseStr1);

const str = 'you only live once';
console.log(reverseString(str));

/**
 * Create a function to convert all array values into Uppercase
 * 
 * 1. what is the purpose of the function?
 *      arrayUpperCase     
 * 
 * 2. Do I need any input from user? - Yes
 *      If yes,
 *          a) how many inputs we need from user? - 1
 * 
 * 3. Should the function return any value back to user? - 
 *      return the upperCased array (result of the function)
 */
function arrayUpperCase(inputArr) {
    for (let X=0 ; X<=inputArr.length-1 ; X++) {
        inputArr[X] = inputArr[X].toUpperCase();
    }
    return inputArr;
}

console.log('\nfunction to convert all array values into Uppercase');
console.log(arrayUpperCase(['heLLo', 'mixINg']));

/**
 * Create a function to find if a given string is palindrome or not
 * 
 * 1. what is the purpose of the function?
 *      isPalindrome
 * 2. Do I need any input from user? - yes
 *      If yes,
 *          a) how many inputs we need from user? - 1
 * 
 * 3. Should the function return any value back to user? - yes
 *      return the result of the function
 */

// function isPalindrome(inputStr) {
//     const reverseInputStr = inputStr.split('').reverse().join('');
//     const result = inputStr.localeCompare(reverseInputStr) === 0
//     return result;
// }

function isPalindrome(inputStr) {
    const reverseInputStr = inputStr.split('').reverse().join('');
    return inputStr.localeCompare(reverseInputStr) === 0;
}

// function isPalindrome(inputStr) {
//     return inputStr.localeCompare(inputStr.split('').reverse().join('')) === 0;
// }

console.log('\nfunction to find if a given string is palindrome or not');

console.log(isPalindrome('eye'));               // true
console.log(isPalindrome('king'));              // false
console.log(isPalindrome('race car'));          // false
console.log(isPalindrome('level'));             // true

/**
 * create a function to print account balance from given accounts-detail and account number
 * 
 * 
 * 1. what is the purpose of the function?
 *      getAccountBalance     
 * 
 * 2. Do I need any input from user? - yes
 *      If yes,
 *          a) how many inputs we need from user? - 2 (accountDetails[], accountNumber)
 * 
 * 3. Should the function return any value back to user? - No
 *      
 * 
 */
function getAccountBalance(accountDetails, accNumber) {
    let isAccountFound = false;
    // for (let i=0 ; i<=accountDetails.length-1 ; i++) {
    //     if (accountDetails[i].accountNumber === accNumber) {
    //         isAccountFound = true;
    //         console.log(accountDetails[i].balance);
    //         break;
    //     }
    // }

    for (const accObj of accounts) {
        if (accObj.accountNumber === accNumber) {
            isAccountFound = true;
            console.log(accObj.balance);
            break;
        }
    }

    if (!isAccountFound) {
        console.log('No account is available with given account-number');
    }
}

const accounts = [
    {
        accountNumber: 1234,
        balance: '$1000'
    },
    {
        accountNumber: 2345,
        balance: '$2000'
    },
    {
        accountNumber: 3456,
        balance: '$3000'
    },
    {
        accountNumber: 4567,
        balance: '$4000'
    },
    {
        accountNumber: 5678,
        balance: '$5000'
    },
]
console.log('\nfunction to print account balance from given accounts-detail and account number');
getAccountBalance(accounts, 1234);

getAccountBalance(accounts, 3456);

getAccountBalance(accounts, 4567);

getAccountBalance(accounts, 2345);

getAccountBalance(accounts, 9898);

getAccountBalance(accounts, 5678);
