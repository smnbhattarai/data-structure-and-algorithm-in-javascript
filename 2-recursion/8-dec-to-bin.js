function decimalToBinary(decimal, result) {
    if (decimal < 1) {
        return result;
    }
    result = Math.floor(decimal % 2) + result;
    return decimalToBinary(decimal / 2, result);
}

console.log(decimalToBinary(4, ""));
console.log(decimalToBinary(128, ""));
console.log(decimalToBinary(233, ""));
console.log(decimalToBinary(255, ""));