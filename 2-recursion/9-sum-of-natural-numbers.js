function recursiveSum(num) {
    if (num <= 1) return num;
    return recursiveSum(num - 1) + num;
}

console.log(recursiveSum(10));