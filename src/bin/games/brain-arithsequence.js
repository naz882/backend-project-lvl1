#!/usr/bin/env node

import startGame from '../..';

const getArithmeticSequence = (start, step) => {
  const result = [];
  let k = 0;
  let newStart = start;
  while (k < 10) {
    result.push(newStart);
    newStart += step;
    k += 1;
  }
  return result;
};

const description = 'What number is missing in the progression?';
const func = () => {
  const randomNumb1 = Math.floor(Math.random() * 10);
  const randomNumb2 = Math.floor(Math.random() * 10);
  const sequence = getArithmeticSequence(randomNumb1, randomNumb2);
  const randomElementOfSequence = Math.floor(Math.random() * sequence.length);
  const correctAnswer = sequence[randomElementOfSequence];
  sequence[randomElementOfSequence] = '..';
  const question = `Question: ${sequence}`;
  return [question, Number(correctAnswer)];
};
export default () => startGame(description, func);
