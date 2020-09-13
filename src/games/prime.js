import flow from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
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

const brainPrime = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default brainPrime;
