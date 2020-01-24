#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, checkEvenOdd } from '..';


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = getName();

let points = 0;
while (true) {
  const randomNumb = Math.floor(Math.random() * 100);
  const checked = checkEvenOdd(randomNumb);
  console.log(`Question: ${randomNumb}`);
  const answer = readlineSync.question('Your answer: ');

  if ((answer === 'yes' && checked === 'yes') || (answer === 'no' && checked === 'no')) {
    console.log('Correct!');
    points += 1;
    if (points === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${checked}`);
    console.log(`Let's try again, ${name}!`);
    points = 0;
  }
}
