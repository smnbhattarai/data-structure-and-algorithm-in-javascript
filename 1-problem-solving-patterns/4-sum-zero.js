/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 */
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-2, 0, 1, 3]));