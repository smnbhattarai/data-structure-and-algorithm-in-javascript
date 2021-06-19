/**
 * Write a function called maxSubArraySum which accepts an array of integers and a number called n.
 * This function should calculate the maximum sum of n consecutive elements in the array.
 * maxSubArraySum([1,2,5,2,8,1,5],2) // 10
 * maxSubArraySum([1,2,5,2,8,1,5],4) // 17
 * maxSubArraySum([4,2,1,6],1) // 6
 * maxSubArraySum([4,2,1,6,2],4) // 13
 * maxSubArraySum([],4) // null
 */
function maxSubArraySum(arr, num) {
    if (num > arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));