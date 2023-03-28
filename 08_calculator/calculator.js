const add = function(number1, number2) {
  return number1 + number2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(array) {
  let total = 0;
  for (let item of array) {
    total += item;
  }
  return total;	
};

const multiply = function(array) {
  let product = 1;
  for (let item of array) {
    product *= item;
  }

  return product;

};

const power = function(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
