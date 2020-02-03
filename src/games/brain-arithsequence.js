import random from '../utils';
import startGame from '..';

const getArithmeticSequence = (start, step, length) => {
  const result = [];
  let first = start;
  for (let i = 0; i < length; i += 1) {
    result.push(first);
    first += step;
  }
  return result;
};


const description = 'What number is missing in the progression?';
const lengthOfSequence = 10;

const getAnswerAndQuestion = () => {
  const randomNumb1 = random(0, 10);
  const randomNumb2 = random(0, 10);
  const sequence = getArithmeticSequence(randomNumb1, randomNumb2, lengthOfSequence);
  const randomElementOfSequence = random(0, sequence.length);
  const correctAnswer = String(sequence[randomElementOfSequence]);
  sequence[randomElementOfSequence] = '..';
  const question = sequence;
  return [question, correctAnswer];
};
export default () => startGame(description, getAnswerAndQuestion);
