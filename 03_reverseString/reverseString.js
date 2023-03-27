const reverseString = function (word) {
  if (word.includes(" ")) {
    word.split(" ").map(w => w.split('').reverse().join('')).reverse().join(" ");
  }
  return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
