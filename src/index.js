require("dotenv").config();

const sumNumbers = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr);
};

const sumNumber = sumNumbers([1, 2, 3]);
console.log(sumNumber);

module.exports = { sumNumbers };
