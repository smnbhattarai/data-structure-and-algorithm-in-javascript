/**
 * find two numbers in numArray that sums upto sum
 */
function twoSum(numArray, sum) {
    let pairs = [];
    let hashTable = [];
    for (let i = 0; i < numArray.length; i++) {
        let currentElem = numArray[i];
        let counterPart = sum - currentElem;
        if (hashTable.indexOf(counterPart) !== -1) {
            pairs.push([currentElem, counterPart]);
        }
        hashTable.push(currentElem);
    }
    return pairs;
}

console.log(twoSum([1, 2, 3, 4, 3, 2, 1, 4], 5));
console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([40, 11, 19, 17, -12], 28));