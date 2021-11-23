import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const getRandomSign = () => {
  const numb = Math.floor(Math.random() * 3);
  switch(numb) {
    case 0:
      return '*';
    case 1:
      return '-';
    case 2:
      return '+';
  }
}

const checkAnswer = (a, b, sign) => {
  if (sign === '*'){
    return a * b;
  }
  if (sign === '+'){
    return a + b;
  }
  if (sign === '-'){
    return a - b;
  }
}

export const brainCalc = (name) => {
  const correctAnswer = 3;
  let myCorrectAnswer = 0;
  while (myCorrectAnswer < correctAnswer) {
    const a = getRandomIntInclusive(1, 20);
    const b = getRandomIntInclusive(1, 20);
    const sign = getRandomSign();
    console.log(`Question: ${a} ${sign} ${b}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = checkAnswer(a, b, sign);
    if (answer == rightAnswer) {
      console.log('Correct!');
      myCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer (. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}`);
      myCorrectAnswer = 0;
    }
  }
}