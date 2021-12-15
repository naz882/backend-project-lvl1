import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (condition, getResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}`);
  console.log(condition);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = getResult();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question();
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
