import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../Utils/funcs.js';

const getRandomSign = () => {
  const numb = Math.floor(Math.random() * 3);
  switch (numb) {
    case 0:
      return '*';
    case 1:
      return '-';
    case 2:
      return '+';
    default:
      break;
  }
  return null;
};

const getAnswer = (a, b, sign) => {
  if (sign === '*') {
    return a * b;
  }
  if (sign === '+') {
    return a + b;
  }
  if (sign === '-') {
    return a - b;
  }
  return null;
};

export default (name) => {
  const correctAnswer = 3;
  let myCorrectAnswer = 0;
  while (myCorrectAnswer < correctAnswer) {
    const a = getRandomIntInclusive(1, 20);
    const b = getRandomIntInclusive(1, 20);
    const sign = getRandomSign();
    console.log(`Question: ${a} ${sign} ${b}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = getAnswer(a, b, sign);
    if (parseInt(answer, 10) === rightAnswer) {
      console.log('Correct!');
      myCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer (. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}`);
      myCorrectAnswer = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};
