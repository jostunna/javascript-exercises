const removeFromArray = function (array, ...list) {
  return array.filter(item => !list.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
