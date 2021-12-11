import getRandomIntInclusive from '../Utils/funcs.js';
import run from '../index.js';

const isEven = (number) => number % 2 === 0;

const rightAnswer = (bool) => {
  if (bool) {
    return 'yes';
  }
  return 'no';
};

const generateQuestionandAnswer = () => {
  const question = getRandomIntInclusive(1, 20);
  const answer = rightAnswer(isEven(question));
  return [question, answer];
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  run(condition, generateQuestionandAnswer);
};
