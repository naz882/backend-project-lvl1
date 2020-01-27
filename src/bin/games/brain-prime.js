#!/usr/bin/env node

import startGame from '../..';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % 2 === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const func = () => {
  const randomNumb = Math.floor(Math.random() * 100);
  const correctAnswer = isPrimeNumber(randomNumb);
  const question = `Question: ${randomNumb}`;
  return [question, correctAnswer];
};
export default () => startGame(description, func);
