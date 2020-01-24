#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, OperationWithTwoNumbers } from '../..';

const startBrainCalc = () => {
  console.log('Welcome to the Brain calc!');
  console.log('What is the result of the expression?.');
  const name = getName();

  const signs = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * signs.length);
    const randomNumb1 = Math.floor(Math.random() * 10);
    const randomNumb2 = Math.floor(Math.random() * 10);
    const randomSign = signs[random];
    const resultOfTwo = OperationWithTwoNumbers(randomNumb1, randomNumb2, randomSign);
    console.log(`Question: ${randomNumb1} ${randomSign} ${randomNumb2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === resultOfTwo) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${resultOfTwo}`);
      console.log(`Let's try again, ${name}!`);
    }
  }
};

export default startBrainCalc;
