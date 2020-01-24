#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getGcd } from '../..';

const startBrainGcd = () => {
  console.log('Welcome to the Brain calc!');
  console.log('Find the greatest common divisor of given numbers.');
  const name = getName();

  for (let i = 0; i < 3; i += 1) {
    const randomNumb1 = Math.floor(Math.random() * 100);
    const randomNumb2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumb1} ${randomNumb2}`);
    const gcd = getGcd(randomNumb1, randomNumb2);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === gcd) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gcd}`);
      console.log(`Let's try again, ${name}!`);
    }
  }
};

export default startBrainGcd;
