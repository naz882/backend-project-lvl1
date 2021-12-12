import getRandomIntInclusive from '../Utils/funcs.js';
import run from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const generateProgression = (step, first) => {
  const progression = [];
  const lengthOfProgression = 7;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(first + (step * i));
  }
  return progression;
};

const hideElement = (arr, randomIndex) => {
  const question = arr;
  question[randomIndex] = '..';
  return question.join(' ');
}

const generateQuestionandAnswer = () => {
  const progression = generateProgression(getRandomIntInclusive(1, 5), getRandomIntInclusive(1, 20));
  const randomIndex = getRandomIntInclusive(0, 6);
  const rightAnswer = progression[randomIndex];
  const question = hideElement([...progression], randomIndex);
  return [question, rightAnswer];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
