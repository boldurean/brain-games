import flow from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
function getGcd(num1, num2) {
  return num2 === 0 ? num1 : getGcd(num2, num1 % num2);
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));

  return [question, answer];
};

const brainGCD = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default brainGCD;
