import startGame from '..';
import random from '../utils';

const calculate = (number1, number2, sign) => {
  switch (sign) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const description = 'What is the result of the expression?.';

const signs = ['+', '-', '*'];

const getAnswerAndQuestion = () => {
  const randomIndex = random(0, signs.length - 1);
  const randomSign = signs[randomIndex];
  const randomNumb1 = random(0, 10);
  const randomNumb2 = random(0, 10);
  const correctAnswer = String(calculate(randomNumb1, randomNumb2, randomSign));
  const question = `${randomNumb1} ${randomSign} ${randomNumb2}`;
  return [question, correctAnswer];
};
export default () => startGame(description, getAnswerAndQuestion);
