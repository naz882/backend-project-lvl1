import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const getAnswer = (firstNumb, secondNumb) => {
  const min = Math.min(firstNumb, secondNumb);
  const max = Math.max(firstNumb, secondNumb);
  
  let gcd = 1;
  for (let i = 1; i <= min; i += 1){
    if (min % i == 0 && max % i == 0){
      gcd = i;
    }
  }
  return gcd;

}

export const brainGcd = (name) => {

  const correctAnswer = 3;
  let myCorrectAnswer = 0;
  while (myCorrectAnswer < correctAnswer) {
    const firstNumb = getRandomIntInclusive(1, 40);
    const secondNumb = getRandomIntInclusive(1, 40);
    const rightAnswer = getAnswer(firstNumb, secondNumb);
    console.log(`Question: ${firstNumb} ${secondNumb}`);
    const answer = readlineSync.question('Your answer: ');
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