import random from '../utils';
import startGame from '..';

const getArithmeticSequence = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};


const description = 'What number is missing in the progression?';
const lengthOfSequence = 10;

const getAnswerAndQuestion = () => {
  const randomNumb1 = random(0, 10);
  const randomNumb2 = random(0, 10);
  const sequence = getArithmeticSequence(randomNumb1, randomNumb2, lengthOfSequence);
  const randomIndex = random(0, sequence.length - 1);
  const correctAnswer = String(sequence[randomIndex]);
  sequence[randomIndex] = '..';
  return [sequence, correctAnswer];
};
export default () => startGame(description, getAnswerAndQuestion);
