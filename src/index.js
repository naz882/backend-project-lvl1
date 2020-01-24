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
export { checkEvenOdd, getName };
