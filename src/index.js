#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${name} !`);
  return name;
};
const startGame = (description, getData, game) => {
  const greetings = getName();
  console.log(description);
  let gameCount = 0;
  while (gameCount < 3) {
    const array = getData();
    const question = array[0];
    const correctAnswer = array[1];
    console.log('Question:', question);
    let yourAnswer = readlineSync.question('Your answer: ');
    if (game !== 'answerisString') {
      yourAnswer = Number(yourAnswer);
    }
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      gameCount += 1;
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${array[1]}'.`);
      console.log(`Let's try again, ${greetings}!`);
    }
  }
  console.log(`Congratulations, ${greetings}`);
};

export default startGame;
