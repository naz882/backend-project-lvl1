import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../Utils/funcs.js';

const generateProgression = () => {
  const randomIncreasing = getRandomIntInclusive(1, 5);
  const randomStart = getRandomIntInclusive(1, 20);
  const progression = [];
  progression.push(randomStart);
  for (let i = 1; i < 7; i += 1){
    progression.push(progression[i-1]+randomIncreasing);
  }
  return progression;
}

export const brainProgression = (name) => {
  

  const correctAnswer = 3;
  let myCorrectAnswer = 0;
  while (myCorrectAnswer < correctAnswer) {
    const progression = generateProgression();
    const randomIndex = getRandomIntInclusive(0,6);
    const rightAnswer = progression[randomIndex];
    const question = [...progression];
    question[randomIndex] = "..";
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer == rightAnswer) {
      console.log('Correct!');
      myCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer (. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}`);
      myCorrectAnswer = 0;
    }
  }


} 