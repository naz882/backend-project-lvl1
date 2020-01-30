#!/usr/bin/env node
import startGame from '../..';
import random from '../../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const checkEvenOdd = (randomNmb) => randomNmb % 2 === 0;
const func = () => {
  const numb = random(0, 100);
  const question = numb;
  const correctAnswer = checkEvenOdd(numb) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => startGame(description, func, 'answerisString');
