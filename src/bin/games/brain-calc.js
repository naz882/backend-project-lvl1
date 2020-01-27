#!/usr/bin/env node
import startGame from '../..';

const OperationWithTwoNumbers = (number1, number2, sign) => {
  if (sign === '-') {
    return number1 - number2;
  }
  if (sign === '+') {
    return number1 + number2;
  }
  if (sign === '*') {
    return number1 * number2;
  }
  return null;
};

const description = 'What is the result of the expression?.';

const signs = ['+', '-', '*'];

const func = () => {
  const random = Math.floor(Math.random() * signs.length);
  const randomNumb1 = Math.floor(Math.random() * 10);
  const randomNumb2 = Math.floor(Math.random() * 10);
  const randomSign = signs[random];
  const correctAnswer = OperationWithTwoNumbers(randomNumb1, randomNumb2, randomSign);
  const question = `Question: ${randomNumb1} ${randomSign} ${randomNumb2}`;
  return [question, correctAnswer];
};
export default () => startGame(description, func);
