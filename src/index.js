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

const getGcd = (number1, number2) => {
  const smallestNumber = number1 > number2 ? number2 : number1;
  let gcd = 0;
  for (let i = 1; i <= smallestNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const getArithmeticSequence = (start, step) => {
  const result = [];
  let k = 0;
  let newStart = start;
  while (k < 10) {
    result.push(newStart);
    newStart += step;
    k += 1;
  }
  return result;
};


export {
  checkEvenOdd, getName, OperationWithTwoNumbers, getGcd, getArithmeticSequence,
};
