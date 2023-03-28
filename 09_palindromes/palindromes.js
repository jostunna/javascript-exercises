const palindromes = function (word) {
    let str = word.toLowerCase().replace(/\W/g, '');
    let reversed = str.split("").reverse().join("").toLowerCase();
    return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
