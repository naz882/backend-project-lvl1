#!/usr/bin/env node
import startGame from '../..';
import random from '../../utils';

const getGcd = (number1, number2) => {
  const smallestNumber = number1 > number2 ? number2 : number1;
  let gcd = 0;
  for (let i = 1; i <= smallestNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const description = 'Find the greatest common divisor of given numbers.';
const func = () => {
  const randomNumb1 = random(0, 20);
  const randomNumb2 = random(0, 20);
  const question = `${randomNumb1} ${randomNumb2}`;
  const correctAnswer = getGcd(randomNumb1, randomNumb2);
  return [question, correctAnswer];
};
export default () => startGame(description, func);
