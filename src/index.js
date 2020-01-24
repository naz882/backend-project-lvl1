import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${name} !`);
  return name;
};

const checkEvenOdd = (randomNmb) => {
  const EvenOdd = randomNmb % 2 === 0 ? 'yes' : 'no';
  return EvenOdd;
};

const OperationWithTwoNumbers = (number1, number2, sign) => {
  switch (sign) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
};

export { checkEvenOdd, getName, OperationWithTwoNumbers };
