function merge(intervals) {
    if (!intervals.length) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    for (let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastInterval = res[res.length - 1];
        if (currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
        } else {
            res.push(currentInterval);
        }
    }
    return res;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]