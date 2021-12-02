import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../Utils/funcs.js';

const isEven = (number) => number % 2 === 0;
const rightAnswer = (bool) => {
  if (bool) {
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
    const rightAnswer1 = rightAnswer(isEven(question));
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === rightAnswer1) {
      console.log('Correct!');
      myCorrectAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer (. Correct answer was '${rightAnswer1}'.`);
      console.log(`Let's try again, ${name}`);
      myCorrectAnswer = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
