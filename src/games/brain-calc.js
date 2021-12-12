import getRandomIntInclusive from '../Utils/funcs.js';
import run from '../index.js';

const condition = 'What is the result of the expression?';

const getRandomSign = () => {
  const numb = Math.floor(Math.random() * 3);
  const sign = ['*', '+', '-'];
  return sign[numb];
};

const generateQuestionandAnswer = () => {
  const a = getRandomIntInclusive(1, 20);
  const b = getRandomIntInclusive(1, 20);
  const sign = getRandomSign();
  let result;
  switch (sign) {
    case '*':
      result = a * b;
      break;
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      break;
  }
  return [`${a} ${sign} ${b}`, result];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
