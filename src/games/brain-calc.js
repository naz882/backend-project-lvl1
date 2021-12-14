import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const condition = 'What is the result of the expression?';
const operations  = ['*', '+', '-'];

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return;
  };
};

const generateQuestionandAnswer = () => {
  const a = getRandomIntInclusive(1, 20);
  const b = getRandomIntInclusive(1, 20);
  const operation = operations[getRandomIntInclusive(0, operations.length - 1)];
  const result = calculate(a, b, operation);
  return [`${a} ${sign} ${b}`, result];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
