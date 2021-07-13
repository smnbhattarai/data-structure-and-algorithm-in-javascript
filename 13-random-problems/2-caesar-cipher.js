function caesarCipher(str, num) {
    num = num % 26;
    let string = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrsruvwxyz'.split('');
    let encrypted = '';
    for (let i = 0; i < string.length; i++) {
        let current = string[i];
        if (current === ' ') {
            encrypted += ' ';
            continue;
        }
        let currentIndex = alphabet.indexOf(current);
        let newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
            encrypted += alphabet[newIndex].toUpperCase();
        } else {
            encrypted += alphabet[newIndex];
        }
    }
    return encrypted;
}

console.log(caesarCipher("Change this text to CS", 4));
console.log(caesarCipher("Change this text to CS", -4));