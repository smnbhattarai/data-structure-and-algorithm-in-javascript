/**
 * Calculate Factorial recursively
 * @param num
 * @returns {null|number}
 */
function factorial(num) {
    if (num < 0) return null;
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(-2));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(12));
console.log(factorial(15));