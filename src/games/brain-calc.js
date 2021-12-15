import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const condition = 'What is the result of the expression?';
const operations = ['*', '+', '-'];

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      throw new Error(`Operation ${operation} is not supported`);
  }
};

const generateQuestionandAnswer = () => {
  const a = getRandomIntInclusive(1, 20);
  const b = getRandomIntInclusive(1, 20);
  const operation = operations[getRandomIntInclusive(0, operations.length - 1)];
  const result = calculate(a, b, operation).toString();
  return [`${a} ${operation} ${b}`, result];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
