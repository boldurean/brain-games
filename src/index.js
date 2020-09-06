import readlineSync from 'readline-sync';

export const getRightAnswer = (userAnswer, correctAnswer, userName) => console.log(`"${userAnswer}" is wrong answer ;( Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);

export const welcomeMessage = (message = 'Welcome to the Brain Games!') => console.log(message);

export const greeting = (userName) => console.log(`Hi ${userName}!`);

export const question = (expression) => readlineSync.question(`Question: ${expression}\nYour answer: `);

export const getNumbers = (num1, num2, num3) => {
  const numbers = [];
  numbers.push(num1, num2, num3);
  return numbers;
};
