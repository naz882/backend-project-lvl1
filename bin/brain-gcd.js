#!/usr/bin/env node
import toWelcome from '../src/cli.js';
import { brainGcd } from '../src/games/brain-gcd.js';

const name = toWelcome();
console.log(`Hello, ${name}`);
console.log('Find the greatest common divisor of given numbers.');
brainGcd(name);
