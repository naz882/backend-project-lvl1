import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  const min = Math.min(firstNumber, secondNumber);
  const max = Math.max(firstNumber, secondNumber);
  for (let i = min; i > 1; i -= 1) {
    if (min % i === 0 && max % i === 0) {
      return i;
    }
  }
  return 1;
};

const generateQuestionandAnswer = () => {
  const firstNumber = getRandomIntInclusive(1, 40);
  const secondNumber = getRandomIntInclusive(1, 40);
  const rightAnswer = gcd(firstNumber, secondNumber).toString();
  return [`${firstNumber} ${secondNumber}`, rightAnswer];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
