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

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}
