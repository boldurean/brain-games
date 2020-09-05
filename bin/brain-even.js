#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const num3 = Math.floor(Math.random() * 100) + 1;
  let counter = 0;
  const numbers = [num1, num2, num3];

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    const question = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (number % 2 === 0) {
      if (question === 'yes') {
        console.log('Correct!');
        counter += 1;
      } else {
        console.log(`"${question}" is wrong answer ;( Correct answer was "yes".\nLet's try again, ${userName}!`);
      }
    }
    if (number % 2 !== 0) {
      if (question === 'no') {
        console.log('Correct!');
        counter += 1;
      } else {
        console.log(`"${question}" is wrong answer ;( Correct answer was "no".\nLet's try again, ${userName}!`);
      }
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
brainEven();
