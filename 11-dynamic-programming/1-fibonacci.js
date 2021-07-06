/**
 * Memoization version
 */
function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}

console.log(fib(9));


/**
 * Tabular version
 */
function fib_t(n) {
    let fibNums = [];
    fibNums[0] = 0;
    fibNums[1] = 1;
    for (let i = 2; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(fib_t(9));