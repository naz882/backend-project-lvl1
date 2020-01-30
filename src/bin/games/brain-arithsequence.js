#!/usr/bin/env node
import random from '../../utils';
import startGame from '../..';

const getArithmeticSequence = (start, step, length) => {
  const result = [];
  let k = 0;
  let newStart = start;
  while (k < length) {
    result.push(newStart);
    newStart += step;
    k += 1;
  }
  return result;
};

const description = 'What number is missing in the progression?';
const getAnswerAndQuestion = () => {
  const randomNumb1 = random(0, 10);
  const randomNumb2 = random(0, 10);
  const lengthOfSequence = 10;
  const sequence = getArithmeticSequence(randomNumb1, randomNumb2, lengthOfSequence);
  const randomElementOfSequence = Math.floor(Math.random() * sequence.length);
  const correctAnswer = sequence[randomElementOfSequence];
  sequence[randomElementOfSequence] = '..';
  const question = sequence;
  return [question, Number(correctAnswer)];
};
export default () => startGame(description, getAnswerAndQuestion);
