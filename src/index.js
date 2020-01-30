#!/usr/bin/env node
import readlineSync from 'readline-sync';

const startGame = (description, getData, game) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${name} !`);
  console.log(description);
  const gameAttempts = 3;
  let gameCount = 0;
  while (gameCount < gameAttempts) {
    const array = getData();
    const question = array[0];
    const correctAnswer = array[1];
    console.log('Question:', question);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (String(yourAnswer) === String(correctAnswer)) {
      console.log('Correct!');
      gameCount += 1;
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default startGame;
