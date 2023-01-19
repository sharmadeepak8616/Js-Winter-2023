

// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp = 47;

let fTempIntoCTemp = (fTemp - 32) / 1.8
console.log(`\n${fTemp}°F is equals to ${fTempIntoCTemp}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTempIntoKTemp = (fTemp + 459.67) * 5/9;
console.log(`${fTemp}°F is equals to ${fTempIntoKTemp}°K`);

/**
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * For formulas:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * Due date: Fri (20-Jan)
 */