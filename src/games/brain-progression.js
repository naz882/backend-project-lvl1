import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';
const lengthOfProgression = 7;

const generateProgression = (step, first) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(first + (step * i));
  }
  return progression;
};

const hideElement = (progression, hiddenIndex) => {
  const question = [...progression];
  question[hiddenIndex] = '..';
  return question.join(' ');
};

const generateQuestionandAnswer = () => {
  const step = getRandomIntInclusive(1, 5);
  const first = getRandomIntInclusive(1, 20);
  const progression = generateProgression(step, first);
  const hiddenIndex = getRandomIntInclusive(0, lengthOfProgression - 1);
  const rightAnswer = progression[hiddenIndex].toString();
  const question = hideElement(progression, hiddenIndex);
  return [question, rightAnswer];
};

export default () => {
  run(condition, generateQuestionandAnswer);
};
