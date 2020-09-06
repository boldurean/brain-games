import startGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => {
  startGame('Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
};

export default brainEven;
