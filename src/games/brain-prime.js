import getRandomIntInclusive from '../Utils/funcs.js';
import run from '../index.js';

const isPrime = (numb) => {
  if (numb <= 2) {
    return true;
  }
  for (let i = 2; i < numb; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (bool) => {
  if (bool) {
    return 'yes';
  }
  return 'no';
};

const generateQuestionandAnswer = () => {
  const numb = getRandomIntInclusive(1, 40);
  const rightAnswer = getAnswer(isPrime(numb));
  return [numb, rightAnswer];
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  run(condition, generateQuestionandAnswer);
};
