import readlineSync from 'readline-sync';
import toWelcome from './cli.js';

export default (condition, getResult) => {
  const correctAnswer = 3;
  let myCorrectAnswer = 0;
  const name = toWelcome();
  console.log(condition);
  while (myCorrectAnswer < correctAnswer) {
    const resultandQuestion = getResult();
    const question = resultandQuestion[0];
    const rightAnswer = resultandQuestion[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question();
    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
      myCorrectAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      myCorrectAnswer = 0;
      break;
    }
  }
  if (myCorrectAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
