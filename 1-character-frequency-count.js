// Count character is a string
function charCount(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (char.match(/^[a-z0-9]$/)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

var out = charCount("Data structure and algorithm 101");
console.log(out);
