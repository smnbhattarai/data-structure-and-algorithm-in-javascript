function reverseString(str) {
    if (str === "") return "";
    console.log(str.substring(1));
    return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString("Hello world"));