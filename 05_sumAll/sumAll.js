const sumAll = function (min, max) {
  let sum = 0;
  if (min > max) {
    for (let i = min; i >= max; i--) {
      sum += i;
    }
  } else {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
