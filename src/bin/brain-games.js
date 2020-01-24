#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainCalc from './games/brain-calc';
import brainEven from './games/brain-even';

console.log('Welcome to the Brain Games!');
console.log('Please chose a game typing 1 or 2');
console.log('1. Even game');
console.log('2. Brain calc');
const game = readlineSync.question('Your choice: ');

if (game === '1') {
  brainEven();
} else if (game === '2') {
  brainCalc();
}
