import startGame from '../index.js';
import getRandomNum from '../math.js';

const getQuestionAndAnswer = () => {
  let answer;

  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operators.length - 1));
  const randomOperator = operators[randomIndex];
  switch (randomOperator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown order state: '${randomOperator}'!`);
  }
  const question = `${num1} ${randomOperator} ${num2}`;
  return [question, String(answer)];
};

const brainCalc = () => {
  startGame('What is the result of expression?', getQuestionAndAnswer);
};

export default brainCalc;
