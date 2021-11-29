#!/usr/bin/env node

import toWelcome from '../src/cli.js';
import brainPrime from '../src/games/brain-prime.js';

const name = toWelcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
brainPrime(name);
