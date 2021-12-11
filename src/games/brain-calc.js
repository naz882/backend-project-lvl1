import getRandomIntInclusive from '../Utils/funcs.js';
import { run } from '../index.js'

const getRandomSign = () => {
  const numb = Math.floor(Math.random() * 3);
  switch (numb) {
    case 0:
      return '*';
    case 1:
      return '-';
    case 2:
      return '+';
    default:
      break;
  }
  return null;
};

const generateQuestionandAnswer = () => {

  const a = getRandomIntInclusive(1, 20);
  const b = getRandomIntInclusive(1, 20);
  const sign = getRandomSign();
  let result;
  if (sign === '*') {
    result = a * b;
  }
  if (sign === '+') {
    result = a + b;
  }
  if (sign === '-') {
    result = a - b;
  }
  return [`${a} ${sign} ${b}`, result];
};

const condition = 'What is the result of the expression?';

export default () => { 
  run(condition,  generateQuestionandAnswer);
};
