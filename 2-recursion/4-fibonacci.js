/**
 * Fibonacci recursively
 */
function fibonacci(num) {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));


/**
 * Fibonacci iterative
 */
function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

console.log(fib(6));