#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, isPrimeNumber } from '../..';

const startBrainPrime = () => {
  console.log('Welcome to the Brain Game!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = getName();

  for (let i = 0; i < 3; i += 1) {
    const randomNumb = Math.floor(Math.random() * 100);
    const checked = isPrimeNumber(randomNumb);
    console.log(`Question: ${randomNumb}`);
    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && checked === 'yes') || (answer === 'no' && checked === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${checked}`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startBrainPrime;
