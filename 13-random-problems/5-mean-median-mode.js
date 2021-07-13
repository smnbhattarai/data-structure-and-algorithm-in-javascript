function getMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function getMedian(arr) {
    arr.sort((a, b) => a - b);
    let median;
    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length / 2)];
    } else {
        let m1 = arr[(arr.length / 2) - 1];
        let m2 = arr[arr.length / 2];
        median = (m1 + m2) / 2;
    }
    return median;
}

function getMode(arr) {
    let modeObj = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    }

    let maxFrequency = 0;
    let modes = [];
    for (let num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    }
    if (modes.length === Object.keys(modeObj).length) modes = [];
    return modes;
}

function getMeanMedianMode(arr) {
    return {
        'mean': getMean(arr),
        'median': getMedian(arr),
        'mode': getMode(arr)
    };
}

console.log(getMeanMedianMode([1, 2, 3, 3, 4, 5, 6, 4, 3, 2, 1, 1, 2, 1, 1, 7]));
console.log(getMeanMedianMode([1, 2, 3, 4, 5, 6, 7]));
console.log(getMeanMedianMode([1, 2, 3, 4,4, 5, 6, 7, 3]));