/**
 * Time complexity O(N)
 * Space complexity O(N)
 */
function climbStairs(n) {
    if (n <= 3) return n;
    let ways = [0, 1, 2, 3];
    for (let i = 4; i <= n; i++) {
        ways.push(ways[i - 1] + ways[i - 2]);
    }
    return ways.pop();
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log("---------------");

/**
 * Time complexity O(N)
 * Space complexity O(1)
 */
function climbStairs2(n) {
    if (n === 1) return n;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }
    return second;
}

console.log(climbStairs2(2));
console.log(climbStairs2(3));
console.log(climbStairs2(4));
console.log(climbStairs2(5));