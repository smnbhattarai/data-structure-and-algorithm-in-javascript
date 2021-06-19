/**
 * Helper method recursion
 */
function collectOddValues(arr) {
    let result = [];

    function helper(input) {
        if (input.length === 0) return;
        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }
        helper(input.slice(1));
    }

    helper(arr);
    return result;
}

console.log(collectOddValues([3, 7, 5, 4, 43, 2, 54, 2, 1, 4, 23]));


/**
 * Pure recursion
 */
function collectOddValuesPure(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValuesPure(arr.splice(1)));
    return newArr;
}

console.log(collectOddValuesPure([3, 7, 5, 4, 43, 2, 54, 2, 1, 4, 23]));