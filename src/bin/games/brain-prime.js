#!/usr/bin/env node
import random from '../../utils';
import startGame from '../..';

const isPrimeNumber = (number) => {
  if (number < 0 || number === 1 || number === 0) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % 2 === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const func = () => {
  const randomNumb = random(0, 100);
  const correctAnswer = isPrimeNumber(randomNumb) ? 'yes' : 'no';
  const question = `Question: ${randomNumb}`;
  return [question, correctAnswer];
};
export default () => startGame(description, func, 'answerisString');
