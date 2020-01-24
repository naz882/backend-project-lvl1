#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getArithmeticSequence } from '../..';

const startBrainArithSequence = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
  const name = getName();

  for (let i = 0; i < 3; i += 1) {
    const randomNumb1 = Math.floor(Math.random() * 10);
    const randomNumb2 = Math.floor(Math.random() * 10);
    const sequence = getArithmeticSequence(randomNumb1, randomNumb2);
    const RandomElement = Math.floor(Math.random() * sequence.length);
    const hiddenAnswer = sequence[RandomElement];
    sequence[RandomElement] = '..';
    console.log(`Question: ${sequence}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === hiddenAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${hiddenAnswer}`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startBrainArithSequence;
