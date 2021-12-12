import getRandomIntInclusive from '../Utils/funcs.js';
import run from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  const min = Math.min(firstNumber, secondNumber);
  const max = Math.max(firstNumber, secondNumber);
  let gcd = 1;
  for (let i = 1; i <= min; i += 1) {
    if (min % i === 0 && max % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const generateQuestionandAnswer = () => {
  const firstNumber = getRandomIntInclusive(1, 40);
  const secondNumber = getRandomIntInclusive(1, 40);
  const rightAnswer = gcd(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, rightAnswer];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
