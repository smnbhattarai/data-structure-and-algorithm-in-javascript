function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            let temp = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 8, 5, 1, 4, 2]));


function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let middleIndex = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
    let result = [];
    while (arr1.length && arr2.length) {
        let minElem;
        if (arr1[0] < arr2[0]) {
            minElem = arr1.shift();
        } else {
            minElem = arr2.shift();
        }
        result.push(minElem);
    }
    if (arr1.length) result = result.concat(arr1);
    else result = result.concat(arr2);
    return result;
}

console.log(mergeSort([3, 9, 8, 5, 1, 4, 2, 6]));