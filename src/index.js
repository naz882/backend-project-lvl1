import readlineSync from 'readline-sync';

export default (condition, getResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}`);
  console.log(condition);
  let myCorrectAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
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
