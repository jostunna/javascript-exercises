const palindromes = function (word) {
    let reversed = word.split("").reverse().join("");
    return word === reversed;
};

// Do not edit below this line
module.exports = palindromes;
