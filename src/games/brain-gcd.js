import getRandomIntInclusive from '../Utils/funcs.js';
import { run } from '../index.js';

const getAnswer = (firstNumb, secondNumb) => {
  const min = Math.min(firstNumb, secondNumb);
  const max = Math.max(firstNumb, secondNumb);
  let gcd = 1;
  for (let i = 1; i <= min; i += 1) {
    if (min % i === 0 && max % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const generateQuestionandAnswer = () => {
  const firstNumb = getRandomIntInclusive(1, 40);
  const secondNumb = getRandomIntInclusive(1, 40);
  const rightAnswer = getAnswer(firstNumb, secondNumb);
  return [`Question: ${firstNumb} ${secondNumb}`, rightAnswer];
};

const condition = 'Find the greatest common divisor of given numbers.';

export default () => { 
  run(condition,  generateQuestionandAnswer);
};