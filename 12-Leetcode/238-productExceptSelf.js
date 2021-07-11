function productExceptSelf(nums) {
    console.log(nums);
    let output = nums.map(n => 1);
    console.log(output);
    let product = 1;
    // multiply from the left
    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product;
        product = product * nums[i];
    }
    console.log(output);
    product = 1;
    // multiply from right
    for (let j = nums.length - 1; j >= 0; j--) {
        output[j] = output[j] * product;
        product = product * nums[j];
    }
    console.log(output);
    return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));