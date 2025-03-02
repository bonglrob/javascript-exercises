const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numsArray) {
	return numsArray.length === 0 ? 0 : numsArray.reduce((acc, num) => acc + num);
};

const multiply = function(numsArray) {
  return numsArray.reduce((acc, num) => num * acc);
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(number) {
  let total = 1;
	for (let i = 1; i <= number; i++) {
    total *= i;
  };
  return total;
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
