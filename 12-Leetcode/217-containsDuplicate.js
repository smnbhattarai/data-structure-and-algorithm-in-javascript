function containsDuplicate(nums) {
    const visitedNums = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (visitedNums[num]) {
            return true;
        } else {
            visitedNums[num] = true;
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));