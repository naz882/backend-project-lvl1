import getRandomIntInclusive from '../Utils/funcs.js';
import { run } from '../index.js';

const generateProgression = () => {
  const randomIncreasing = getRandomIntInclusive(1, 5);
  const randomStart = getRandomIntInclusive(1, 20);
  const progression = [];
  progression.push(randomStart);
  for (let i = 1; i < 7; i += 1) {
    progression.push(progression[i - 1] + randomIncreasing);
  }
  return progression;
};

const generateQuestionandAnswer = () => {
  const progression = generateProgression();
  const randomIndex = getRandomIntInclusive(0, 6);
  const rightAnswer = progression[randomIndex];
  const question = [...progression];
  question[randomIndex] = '..';
  return [question.join(' '), rightAnswer];
}

const condition = 'Find the greatest common divisor of given numbers.';

export default () => { 
  run(condition,  generateQuestionandAnswer);
};