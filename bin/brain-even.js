#!/usr/bin/env node

import toWelcome from '../src/cli.js';
import readlineSync from 'readline-sync';

const name = toWelcome();
console.log('Hello, ' + name);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
const checkAnswer = (number) => {
  if (number % 2 == 0) {
    return 'yes';
  }
  return 'no';
}

const correctAnswer = 3;
let myCorrectAnswer = 0;
while (myCorrectAnswer < correctAnswer) {
  const question = getRandomIntInclusive(1, 20);
  console.log('Question: ' + question);
  const answer = readlineSync.question('Your answer: ').toLowerCase();
  if (answer == checkAnswer(question)) {
    console.log('Correct!');
    myCorrectAnswer += 1;
  } else {
    console.log(answer + 'is wrong answer ;(. Correct answer was ' + question + '.');
    console.log("Let's try again, " + name);
    myCorrectAnswer = 0;
  }
}


