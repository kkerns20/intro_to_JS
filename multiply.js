// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, 
// then output the numbers and result as a simple equation.

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
  // return parseFloat(readlineSync.question(prompt));
}

function multiply(left, right) {
  return left * right;
}

let first = getNumber('Enter the first number: ');
let second = getNumber('Enter the second number: ');
console.log(`${first} * ${second} = ${multiply(first, second)}`);
