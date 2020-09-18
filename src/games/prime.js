import runGame from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'Answer "yes" if given number is runPrime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  runGame(gameRule, getQuestionAndAnswer);
};

export default runPrime;
