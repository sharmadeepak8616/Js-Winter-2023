/**
 * find if a given string is a palindrome.
 * 
 * palindrome : a string stays same in reverse
 * eg: eye -> eye
 *     racecar ->   racecar
 *     limit -> timil
 * 
 * if a string is palindrome
 *      ans: true
 * otherwise
 *      ans: false
 * 
 */
/**
 * inputStr = king
 * 
 * reverse inputStr
 *      split inputStr by ''    ->  ['k', 'i', 'n', 'g']
 *      reverse the array           ['g', 'n', 'i', 'k']
 *      join('')                    gnik
 * 
 * compare reverse-inputStr with inputStr   // 
 * 
 * 
 */

const inputStr  = 'eyes';
const reverseInputStr = inputStr.split('').reverse().join('');
const result = inputStr.localeCompare(reverseInputStr) === 0
console.log(result);

/**
 * Find the balance of given account-number
 * 
 * if the account-number is found, print the balance
 * if account-number is not found, print: No account is available with given account-number
 */
/*
    2345

    if (accounts[0].accountNumber === 2345)
        print accounts[0].balance
        stop checking further

    if (accounts[1].accountNumber === 2345)
        print accounts[1].balance
        stop checking further

    if (accounts[2].accountNumber === 2345)
        print accounts[2].balance
        stop checking further
    
    if (accounts[3].accountNumber === 2345)
        print accounts[3].balance
        stop checking further

    if (accounts[4].accountNumber === 2345)
        print accounts[4].balance
        stop checking further
    ...
    ...
    if (accounts[lastIndex].accountNumber === 2345)
        print accounts[lastIndex].balance
        stop checking further
    

    // i=0,1,2,3,...,lastIndex    i=0 ; i<=lastIndex ; i++
    if (accounts[i].accountNumber === 2345)
        print accounts[i].balance
        stop checking further

*/
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
let isAccountFound = false;
for (let i=0 ; i<=accounts.length-1 ; i++) {
    if (accounts[i].accountNumber === 9898) {
        isAccountFound = true;
        console.log(accounts[i].balance);
        break;
    }
}
if (!isAccountFound) {
    console.log('No account is available with given account-number');
}


// console.log('\nUsing for-of loop\n');
// for (const accObj of accounts) {
//     if (accObj.accountNumber === 2345) {
//         console.log(accObj.balance);
//         break;
//     }
// }

