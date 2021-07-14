function binarySearch(numArray, key) {
    let middleIndex = Math.floor(numArray.length / 2);
    let middleElm = numArray[middleIndex];

    if (middleElm === key) {
        return true;
    } else if (middleElm < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    } else if (middleElm > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIndex), key);
    } else {
        return false;
    }
}

console.log(binarySearch([6, 8, 13, 17, 37, 40, 43, 57, 72, 87, 98], 57));
console.log(binarySearch([6, 8, 13, 17, 37, 40, 43, 57, 72, 87, 98], 56));