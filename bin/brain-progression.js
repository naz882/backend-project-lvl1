#!/usr/bin/env node
import toWelcome from '../src/cli.js';
import brainProgression from '../src/games/brain-progression.js';

const name = toWelcome();
console.log(`Hello, ${name}`);
console.log('Find the greatest common divisor of given numbers.');
brainProgression(name);
