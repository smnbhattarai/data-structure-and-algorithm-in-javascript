function canJump(nums) {
    let dpPositions = new Array(nums.length).fill(false);
    dpPositions[0] = true;

    for (let j = 0; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true;
                break;
            }
        }
    }
    return dpPositions[dpPositions.length - 1];
}

console.log(canJump([1, 0, 1, 4]));
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));