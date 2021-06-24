/**
 * Radix sort
 */
function radixSort(nums) {
    let maxDigitsCount = mostDigits(nums);
    for (let k = 0; k < maxDigitsCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}


function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

console.log(radixSort([26424, 234, 2345, 345, 23452345, 2, 345, 7345, 2345, 2345, 78, 56, 234, 123415, 1234, 12345]));