import readlineSync from 'readline-sync';

const attemptsCount = 3;

const playGame = (description, getData) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${name} !`);
  console.log(description);

  for (let i = 0; i < attemptsCount; i += 1) {
    const [question, correctAnswer] = getData();
    console.log('Question:', question);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default playGame;
