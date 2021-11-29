#!/usr/bin/env node

import toWelcome from '../src/cli.js';
import brainCalc from '../src/games/brain-calc.js';

const name = toWelcome();
console.log(`Hello, ${name}`);
console.log('What is the result of the expression?');
brainCalc(name);
