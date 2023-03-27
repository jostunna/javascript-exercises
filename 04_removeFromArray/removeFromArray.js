const removeFromArray = function (array, ...list) {
  for (let i = 0; i < array.length; i++) {
    for (let item of list) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
