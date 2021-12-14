import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionandAnswer = () => {
  const question = getRandomIntInclusive(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
