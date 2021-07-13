function reverseWords(string) {
    let wordsArr = string.split(" ");
    let reversedWords = [];
    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        let reversedWord = '';
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ");
}

console.log(reverseWords("Change this text to CS"));