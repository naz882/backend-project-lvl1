import readlineSync from 'readline-sync';

const startGame = (description, getData) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${name} !`);
  console.log(description);
  const attemptsCount = 3;
  let rigthAnsweredCount = 0;
  for (let i = 0; i < attemptsCount; i += 1) {
    const [question, correctAnswer] = getData();
    console.log('Question:', question);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      rigthAnsweredCount += 1;
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (rigthAnsweredCount === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default startGame;
