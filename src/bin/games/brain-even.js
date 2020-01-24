#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, checkEvenOdd } from '../..';

const startBrainEven = () => {
  console.log('Welcome to the Brain is Even Game!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = getName();

  for (let i = 0; i < 3; i += 1) {
    const randomNumb = Math.floor(Math.random() * 100);
    const checked = checkEvenOdd(randomNumb);
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

export default startBrainEven;
