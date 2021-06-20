/**
 * Linear search
 */
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) return i;
    }
    return -1;
}

console.log(linearSearch([1, 2, 45, 23, 56], 45));
console.log(linearSearch([1, 2, 45, 23, 56, 45, 21, 67], 21));
console.log(linearSearch([1, 2, 45, 23, 56, 45, 21, 67], 12));