import readlineSync from 'readline-sync';

export const log = (message) => console.log(message);

export const question = (message) => readlineSync.question(message);
