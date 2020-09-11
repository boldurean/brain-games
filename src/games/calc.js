import flow from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'What is the result of expression?';
const operators = ['+', '-', '*'];

const getCorrectAnswer = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomOperatorIndex = operators[getRandomNum(0, operators.length - 1)];
  const [num1, operator, num2] = [getRandomNum(1, 100), randomOperatorIndex, getRandomNum(1, 100)];

  const question = `${num1} ${randomOperatorIndex} ${num2}`;
  const answer = String(getCorrectAnswer(num1, operator, num2));
  return [question, answer];
};

const brainCalc = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default brainCalc;
