import flow from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNum(1, 100);
  const isEven = (question % 2 === 0) ? 'yes' : 'no';
  return [question, isEven];
};

const brainEven = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default brainEven;
