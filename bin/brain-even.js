#!/usr/bin/env node

import toWelcome from '../src/cli.js';
import readlineSync from 'readline-sync';
import { brainEven } from '../src/brain-even.js';

const name = toWelcome();
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainEven(name);

