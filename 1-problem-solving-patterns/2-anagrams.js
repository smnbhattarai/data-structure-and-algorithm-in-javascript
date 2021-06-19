/**
 * Given two strings, write a function to determine if second string is an anagram of the first.
 * ("", "") -> true
 * ("aaz", "zza") -> false
 * ("anagram", "nagaram") -> true
 * Input no spaces, no numbers, all lowercase
 */
function validAnagram(firstStr, secondStr) {
    if (firstStr.length !== secondStr.length) return false;

    const lookup = {};

    for (let char of firstStr) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }

    for (let char of secondStr) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char]--;
        }
    }

    return true;

}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("stressed", "desserts"));