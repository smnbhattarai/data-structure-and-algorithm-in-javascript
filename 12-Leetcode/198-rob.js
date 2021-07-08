function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 2]));
    }
    return maxLootAtNth.pop();
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 1, 1, 2]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([]));