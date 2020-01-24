#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startBrainCalc from './games/brain-calc';
import startBrainEven from './games/brain-even';
import startBrainGcd from './games/brain-gcd';
import startBrainArithSequence from './games/brain-arithsequence';
import startBrainPrime from './games/brain-prime';

console.log('Welcome to the Brain Games!');
console.log('Please chose a game typing 1 or 2');
console.log('1. Even game');
console.log('2. Brain calc');
console.log('3. Find GCD');
console.log('4. Arithmetic Sequence');
console.log('5. Is Prime number?');
const game = readlineSync.question('Your choice: ');

if (game === '1') {
  startBrainEven();
} else if (game === '2') {
  startBrainCalc();
} else if (game === '3') {
  startBrainGcd();
} else if (game === '4') {
  startBrainArithSequence();
} else if (game === '5') {
  startBrainPrime();
}
