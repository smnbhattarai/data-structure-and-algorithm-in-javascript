function substringPossible(subString, fullText) {
    let subStrings = subString.toLowerCase();
    let fullTexts = fullText.toLowerCase();
    let subStringArr = subStrings.split(' ');
    let fullTextArr = fullTexts.split(' ');
    let fullTextObj = {};
    fullTextArr.forEach(word => {
        if (!fullTextObj[word]) fullTextObj[word] = 0;
        fullTextObj[word]++;
    });

    console.log(fullTextObj);

    let subStringIsPossible = true;
    subStringArr.forEach(word => {
        if (fullTextObj[word]) {
            fullTextObj[word]--;
            if (fullTextObj[word] < 0) subStringIsPossible = false;
        } else {
            subStringIsPossible = false;
        }
    });
    return subStringIsPossible;
}

console.log(substringPossible('long form sub create', 'this is a long form of string that should be used to create sub string'));