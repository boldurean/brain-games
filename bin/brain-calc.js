#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  welcomeMessage, greeting, getNumbers, question, getRightAnswer,
} from '../src/index.js';

const brainCalc = () => {
  welcomeMessage();
  const userName = readlineSync.question('May I have your name? ');
  greeting(userName);
  console.log('What is the result of the expression?');
  let counter = 0;
  const randomSum = `${Math.floor(Math.random() * 100) + 1} + ${Math.floor(Math.random() * 100) + 1}`;
  const randomDiff = `${Math.floor(Math.random() * 100) + 1} - ${Math.floor(Math.random() * 100) + 1}`;
  const randomMultiply = `${Math.floor(Math.random() * 10) + 1} * ${Math.floor(Math.random() * 10) + 1}`;
  const numbers = getNumbers(randomSum, randomDiff, randomMultiply);
  for (let i = 0; i < numbers.length; i += 1) {
    const expression = numbers[i];
    const userAnswer = eval(question(expression));
    if (userAnswer === eval(expression)) {
      console.log('Correct!');
      counter += 1;
    } else {
      return getRightAnswer(userAnswer, eval(expression), userName);
    }
  }
  if (counter === 3) {
    return console.log(`Congratulations ${userName}!`);
  }
  return false;
};

brainCalc();
