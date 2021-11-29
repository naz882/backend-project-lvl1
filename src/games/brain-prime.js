import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../Utils/funcs.js';

const isPrime = (numb) => {
  if (numb <= 2) {
    return true;
  }
  for (let i = 2; i < numb; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

export default (name) => {
  const correctAnswer = 3;
  let myCorrectAnswer = 0;
  while (myCorrectAnswer < correctAnswer) {
    const numb = getRandomIntInclusive(1, 40);
    const rightAnswer = isPrime(numb);
    console.log(`Question: ${numb}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if ((answer === 'yes' && rightAnswer === true) || (answer === 'no' && rightAnswer === false)) {
      console.log('Correct!');
      myCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer (. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}`);
      myCorrectAnswer = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
