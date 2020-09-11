import flow from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'What number is missing in the progression?';
let answer;

const getProgression = (steps) => {
  const num = getRandomNum(1, 100);
  const hidden = getRandomNum(1, 9);
  let result = '';
  let progressionSteps = 0;
  for (let i = num + 1; i > num; i += steps) {
    progressionSteps += 1;
    if (progressionSteps === 10) {
      return result;
    }
    if (progressionSteps === hidden) {
      answer = (String(i));
      result = `${result} ..`;
      i += steps;
    }
    result = `${result} ${i}`;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const question = getProgression(getRandomNum(1, 5));
  return [question, answer];
};

const brainProgression = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default brainProgression;
