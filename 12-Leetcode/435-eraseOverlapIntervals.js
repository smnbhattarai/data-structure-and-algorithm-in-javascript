function eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) return 0;
    let count = 0;
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        let intervalStart = interval[0];
        let intervalEnd = interval[1];
        if (intervalStart < end) {
            count++;
            end = Math.min(intervalEnd, end);
        } else {
            end = intervalEnd;
        }
    }
    return count;
}

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));