function lengthOfLongestSubstring(s) {
    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(windowCharsMap);
        const endChar = s[i];

        if (windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1;
        }

        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));