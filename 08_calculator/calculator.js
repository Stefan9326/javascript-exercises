const add = function(...nums) {
	return nums.reduce((sum, num) => sum + num)
};

const subtract = function(...nums) {
	return nums.reduce((sum, num) => sum - num)
};

const sum = function(...nums) {
	return nums.reduce((sum, num) => sum + num)
};

const multiply = function(...nums) {
  return nums.reduce((sum, num) => sum * num)
};

const power = function(...nums) {
	return nums.reduce((sum, num) => sum ** num)
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
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
