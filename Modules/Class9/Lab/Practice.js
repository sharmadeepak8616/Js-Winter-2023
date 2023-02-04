let sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];

/**
 * Print the values present at even-index
 * 
 * i = 2, 4, 6, 8, 10, 12,...
 * 
 * console.log(sports[2])
 * console.log(sports[4])
 * console.log(sports[6])
 * console.log(sports[8])
 * ...
 * console.log(sports[lastIndex])    // lastIndex
 * 
 * i = 2    i<=lastIndex    i+=2
 */
console.log('\nQ: Print the values present at even-index');
for (let i=2 ; i<=sports.length-1 ; i+=2) {
    console.log(sports[i]);
}
/*
    const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];
                                                2                       4                   6                   2,4,6 <= 6 (i <= lastIndex)

    const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon', 'HocKEy'];
                                                2                       4                   6                   2,4,6 <= 7 (i <= lastIndex)
*/

console.log('\nQ: Print the value which has length greater than 7');
// const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];

/**
 * Print the value which has length greater than 7
 * 
 * if (sports[0].length > 7) {
 *      print (sports[0])
 * }
 * 
 * if (sports[1].length > 7) {
 *      print (sports[1])
 * }
 * 
 * if (sports[2].length > 7) {
 *      print (sports[2])
 * }
 * 
 * ...
 * ...
 * 
 * if (sports[lastIndex].length > 7) {
 *      print (sports[lastIndex])
 * }
 * 
 * 
 * i = 0, 1, 2, 3, 4,...,lastIndex  (i=0 ; i <= lastIndex ; i++)
 * if (sports[i].length > 7) {
 *      print (sports[i])
 * }
 */

for (let i=0 ; i <= sports.length-1 ; i++) {
    if (sports[i].length > 7) {
        console.log(sports[i]);
    }
}
//                      0           1           2           3        4          5           6                    
// const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];
console.log('\nQ: Print the values of sports array in reverse order');
/**
 * Print the values of sports array in reverse order in following manner:
 * 
 * Index=6, Value=mARAthon
 * Index=5, Value=bAsEbAlL
 * Index=4, Value=sOCcEr
 * Index=3, Value=swIMMinG
 * ...
 * ...
 * Index=0, Value=BaskETBall
 */

/*
    const sports = ['BaskETBall', 'FOOTBALL']

    Index=1, Value=FOOTBALL
    Index=0, Value=BaskETBall
*/

/*
    const sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG']

    Index=3, Value=swIMMinG
    Index=2, Value=rUGBy
    Index=1, Value=FOOTBALL
    Index=0, Value=BaskETBall
*/

/*
    Index=lastIndex, Value=sports[lastIndex]
    Index=lastIndex-1, Value=sports[lastIndex-1]
    Index=lastIndex-2, Value=sports[lastIndex-2]
    Index=lastIndex-3, Value=sports[lastIndex-3]
    ...
    ...
    Index=0, Value=sports[0]

    i = lastIndex, lastIndex-1, lastIndex-2, lastIndex-3,...,0  (i=lastIndex ; i >= 0 ; i--)

    Index=i, Value=sports[i]

*/

sports = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon', 'HOCKEY', 'Juggling'];

for (let i=sports.length-1 ; i >= 0 ; i--) {
    console.log(`Index=${i}, Value=${sports[i]}`);
}

/**
 * Calculate the average of a given array
 * 
 * let numbers = [1, 2, 3, 4, 5]
 * avg = add all values of array / number of values in array
 */


/**
 * Find the longest string value in the given words-array
 * 
 * const words = ['King',  'Football', 'Soccer', 'Welcome to the world', 'hello Dear', 'Queen', 'Johnson']
 */