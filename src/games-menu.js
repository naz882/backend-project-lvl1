import readlineSync from 'readline-sync';
import brainEven from './bin/games/brain-even';
import brainCalc from './bin/games/brain-calc';
import brainGcd from './bin/games/brain-gcd';
import brainArithsequence from './bin/games/brain-arithsequence';
import brainPrime from './bin/games/brain-prime';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Please chose a game typing from 1 to 5');
  console.log('1. Even game');
  console.log('2. Brain calc');
  console.log('3. Find GCD');
  console.log('4. Arithmetic Sequence');
  console.log('5. Is Prime number?');
  const game = readlineSync.question('Your choice: ');
  switch (game) {
    case '1':
      brainEven();
      break;
    case '2':
      brainCalc();
      break;
    case '3':
      brainGcd();
      break;
    case '4':
      brainArithsequence();
      break;
    case '5':
      brainPrime();
      break;
    default:
      break;
  }
};
