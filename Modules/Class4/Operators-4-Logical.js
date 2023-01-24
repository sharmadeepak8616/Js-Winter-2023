/**
 * Logical (&&, ||, !)
 *      are used to combined condition(s)/comparison(s)
 * 
 *  &&      ->      and operator
 *      Conditions around &&-operator must be true, then final result will be true.
 *      If any or all conditions around &&-operator are false, then final result is false.
 * 
 *  ||      ->      or operator
 *      Any one of the conditions around ||-operator must be true, then final result will be true.
 *      If ALL conditions around ||-operator are false, then final result is false.
 * 
 *  !       ->      not operator
 *      makes true into false, and vice versa
 * 
 * 
 * 
 */

/**
 * Bank provide loan to client with credit score more than 650 and annual-pay more than 200000
 * 
 * let annualPay = 150000;
 * let creditScore = 700;
 * 
 * creditScore > 650  &&  annualPay > 200000
 * true     &&      false
 * false
 * 
 * 
 * 
 * Bank provide loan to client with credit score more than 650 and annual-pay more than 200000, or
 *                                  credit score more than 750
 * 
 * let annualPay = 100000;
 * let creditScore = 770;
 * 
 * (creditScore > 650 && annualPay > 200000) || creditScore > 750
 * 
 */
let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;

let lRes1 = lVar2 < lVar4 && lVar1 === (lVar4-lVar2);
/*
        let lRes1 = lVar2 < lVar4 && lVar1 === (lVar4-lVar2);
        let lRes1 = lVar2 < lVar4 && lVar1 === 20;
        let lRes1 = true && lVar1 === 20;
        let lRes1 = true && false;
        let lRes1 = false
*/


let lRes2 = lVar2 < lVar4 || lVar1 === (lVar4-lVar2);
/*
        let lRes1 = lVar2 < lVar4 || lVar1 === (lVar4-lVar2);
        let lRes1 = lVar2 < lVar4 || lVar1 === 20;
        let lRes1 = true || lVar1 === 20;
        let lRes1 = true || false;
        let lRes1 = true
*/

// let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;

let lRes3 = (lVar1 > lVar4 || lVar4+lVar1 >= lVar3+lVar2) && (lVar2-lVar3 <= lVar4);
/*
    let lRes3 = (lVar1 > lVar4 || lVar4+lVar1 >= lVar3+lVar2) && (lVar2-lVar3 <= lVar4);
    let lRes3 = (10 > 40 || lVar4+lVar1 >= lVar3+lVar2) && (lVar2-lVar3 <= lVar4);
    let lRes3 = (false || lVar4+lVar1 >= lVar3+lVar2) && (lVar2-lVar3 <= lVar4);
    let lRes3 = (false || 50 >= 50) && (lVar2-lVar3 <= lVar4);
    let lRes3 = (false || true) && (lVar2-lVar3 <= lVar4);
    let lRes3 = true && (lVar2-lVar3 <= lVar4);
    let lRes3 = true && (20-30 <= 40);
    let lRes3 = true && (-10 <= 40);
    let lRes3 = true && true;
    let lRes3 = true;
*/


let lRes4 = (lVar1 > lVar4 || lVar4+lVar1 >= lVar3+lVar2) && !(lVar2-lVar3 <= lVar4);
/*
    let lRes4 = (lVar1 > lVar4 || lVar4+lVar1 >= lVar3+lVar2) && !(lVar2-lVar3 <= lVar4);
    let lRes4 = (lVar1 > lVar4 || lVar4+lVar1 >= lVar3+lVar2) && !(lVar2-lVar3 <= lVar4);
    let lRes4 = (10 > 40 || lVar4+lVar1 >= lVar3+lVar2) && !(lVar2-lVar3 <= lVar4);
    let lRes4 = (false || lVar4+lVar1 >= lVar3+lVar2) && !(lVar2-lVar3 <= lVar4);
    let lRes4 = (false || 50 >= 50) && !(lVar2-lVar3 <= lVar4);
    let lRes4 = (false || true) && !(lVar2-lVar3 <= lVar4);
    let lRes4 = true && !(lVar2-lVar3 <= lVar4);
    let lRes4 = true && !(20-30 <= 40);
    let lRes4 = true && !(-10 <= 40);
    let lRes4 = true && !(true);
    let lRes4 = true && false;
    let lRes4 = false;
*/

let accountBalance = 10000;
let withdraw = 800;

accountBalance >= withdraw
    // allow withdraw

!(accountBalance < withdraw)
    // allow withdraw
