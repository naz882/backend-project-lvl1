import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../Utils/funcs.js';

const getAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default (name) => {
  const correctAnswer = 3;
  let myCorrectAnswer = 0;
  while (myCorrectAnswer < correctAnswer) {
    const question = getRandomIntInclusive(1, 20);
    console.log(`Question: ${question}`);
    const rightAnswer = getAnswer(question);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === rightAnswer) {
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
