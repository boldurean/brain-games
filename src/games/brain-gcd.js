import startGame from '../index.js';
import getRandomNum from '../math.js';

function gcd(num1, num2) {
  return num2 === 0 ? num1 : gcd(num2, num1 % num2);
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  const answer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;

  return [question, answer];
};

const brainGCD = () => {
  startGame('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
};

export default brainGCD;
