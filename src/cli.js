import readlineSync from 'readline-sync';

export const print = (message) => console.log(message);

export const askQuestion = (question) => readlineSync.question(question);
