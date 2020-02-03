import random from '../utils';
import startGame from '..';

const isPrimeNumber = (number) => {
  if (number <= 0 || number === 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getAnswerAndQuestion = () => {
  const question = random(0, 100);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => startGame(description, getAnswerAndQuestion);
