function fizzBuzz(num) {
    let out = '';
    for (let i = 1; i <= num; i++) {
        let output = '';
        if (i % 3 === 0) output += 'fizz';
        if (i % 5 === 0) output += 'buzz';
        if (output === '') output = i;
        out += output + '\n';
    }
    return out;
}

console.log(fizzBuzz(31));