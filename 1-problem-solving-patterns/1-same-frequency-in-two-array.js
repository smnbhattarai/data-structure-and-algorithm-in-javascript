/**
 * Check if element of arr2 has square of element in arr1. Frequency should match
 * [1,2,3][1,4,9] -> true
 * [2,5,7][25,49] -> false
 */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

let out1 = same([5, 2, 3, 3, 7], [25, 4, 9, 9, 49]);
console.log(out1);