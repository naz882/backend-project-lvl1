#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startBrainCalc from './games/brain-calc';
import startBrainEven from './games/brain-even';

console.log('Welcome to the Brain Games!');
console.log('Please chose a game typing 1 or 2');
console.log('1. Even game');
console.log('2. Brain calc');
const game = readlineSync.question('Your choice: ');

if (game === '1') {
  startBrainEven();
} else if (game === '2') {
  startBrainCalc();
}
