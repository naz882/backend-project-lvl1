#!/usr/bin/env node
import startGame from '../..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const checkEvenOdd = (randomNmb) => {
  const EvenOdd = randomNmb % 2 === 0 ? 'yes' : 'no';
  return EvenOdd;
};
const func = () => {
  const numb = Math.floor(Math.random() * 100);
  const question = `Question: ${numb}`;
  const correctAnswer = checkEvenOdd(numb);
  return [question, correctAnswer];
};
export default () => startGame(description, func, 'answerisString');
