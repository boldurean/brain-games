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
      throw new Error(`Unknown case: "${operator}"!`);
  }
};

const getQuestionAndAnswer = () => {
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  const question = `${num1} ${randomOperator} ${num2}`;
  const answer = String(getCorrectAnswer(num1, randomOperator, num2));
  return [question, answer];
};

const calc = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default calc;
