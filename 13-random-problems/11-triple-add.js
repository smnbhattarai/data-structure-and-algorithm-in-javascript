function tripleAdd(num1) {
    return function (num2) {
        return function (num3) {
            return num3 + num2 + num1;
        }
    }
}

console.log(tripleAdd(10)(20)(30));