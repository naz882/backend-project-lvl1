#!/usr/bin/env node

import toWelcome from '../src/cli.js';
import brainEven from '../src/games/brain-even.js';

const name = toWelcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainEven(name);
