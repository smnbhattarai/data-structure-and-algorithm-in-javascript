function maxArea(height) {
    let maxArea = 0;
    let start = 0;
    let end = height.length - 1;
    while (start < end) {
        const currentArea = Math.min(height[start], height[end]) * (end - start);
        maxArea = Math.max(currentArea, maxArea);
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));