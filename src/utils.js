#!/usr/bin/env node

const random = (min, max) => Math.floor(min + Math.random() * ((max - min) + 1));

export default random;
