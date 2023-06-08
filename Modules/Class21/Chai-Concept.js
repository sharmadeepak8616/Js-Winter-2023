/**
 * chai
 *      is a third-party library
 *      is getting used to write the verification steps in the testcases

 *      expect - refers to the one of the steps in a testcase where we compare actual vs expected result
 * 
 */

/**
 * If input array is [1,2,3,4,5]; then average should be 3
 */

/**
 * If input array is [12, 32, 43, 56, 10]; then average should be 145
 */

/**
 * If input array is [1, -1, 1]; then average should be 0.33
 */
const MyArrayFunctions = require('../Class18/Class-Concept-Pkg-4/MyArrayFunctions');
const MyStringFunctions = require('../Class18/Class-Concept-Pkg-4/MyStringFunctions');
const { expect } = require('chai');

const obj = new MyArrayFunctions();
const obj2 = new MyStringFunctions();


const ans = obj.getArrayAverage([1,2,3,4,5]);
// verify ans = 3
expect(ans, 'getArrayAverage is not working for [1,2,3,4,5]').to.equal(3);


const ans2 = obj.getArrayAverage([12, 32, 43, 56, 10]);
// verify ans = 30.6
expect(ans2, 'getArrayAverage is not working for [12, 32, 43, 56, 10]').to.equal(30.6);


const ans3 = obj.getArrayAverage([1, -1, 1]);
// verify ans = 0.33
expect(ans3, 'getArrayAverage is not working for [1, -1, 1]').to.equal(0.33);

const ans_palindrome = obj2.isPalindrome('level');
expect(ans_palindrome, '"level" is not palindrome').to.be.true;

const ans_palindrome2 = obj2.isPalindrome('hello');
expect(ans_palindrome2, '"hello" is not palindrome').to.be.true;

/**
 * to.equal
 * to.be.true
 * to.be.false
 * 
 * to.deep.equal
 */