import getRandomIntInclusive from '../Utils/funcs.js';
import run from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  if (numb <= 2) {
    return true;
  }
  for (let i = 3; i < numb; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionandAnswer = () => {
  const number = getRandomIntInclusive(1, 40);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
