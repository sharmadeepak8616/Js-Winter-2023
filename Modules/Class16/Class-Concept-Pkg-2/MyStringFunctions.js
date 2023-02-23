class MyStringFunctions {

    reverseStringByWord(inputStr) {
        let reverseStr2 = '';
        const arr2 = inputStr.split(' ');
        for (let m=arr2.length-1 ; m>=0 ; m--) {
            reverseStr2 = reverseStr2 + arr2[m] + " ";
        }
        return reverseStr2.trim();
    }

    isPalindrome(inputStr) {
        const reverseInputStr = inputStr.split('').reverse().join('');
        return inputStr.localeCompare(reverseInputStr) === 0;
    }

    toTitleCase(inputStr) {
        let titleCaseStr1 = '';
        const arr = inputStr.toLowerCase().split(' ');
        for (let i=0 ; i<= arr.length-1 ; i++) {
            titleCaseStr1 = titleCaseStr1 + arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
        }
        return titleCaseStr1.trim();
    }

    getAbbreviation(inputStr) {
        let abbr = '';
        const arr = inputStr.toUpperCase().split(' ');
        for (const word of arr) {
            abbr = abbr + word.charAt(0);
        }
        return abbr;
    }


}
module.exports = MyStringFunctions;