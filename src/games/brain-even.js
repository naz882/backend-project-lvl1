import startGame from '..';
import random from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNmb) => randomNmb % 2 === 0;
const getAnswerAndQuestion = () => {
  const question = random(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => startGame(description, getAnswerAndQuestion);
