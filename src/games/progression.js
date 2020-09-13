import flow from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (startingNumber, hiddenIndex, step) => {
  const progressionLength = 10;
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startingNumber + i * step);
  }
  progression[hiddenIndex] = '..';

  return progression.join(' ');
};

const getQuestionAndAnswer = () => {
  const startingNumber = getRandomNum(1, 50);
  const hiddenIndex = getRandomNum(1, 9);
  const step = getRandomNum(1, 5);

  const question = getProgression(startingNumber, hiddenIndex, step);
  const answer = String(startingNumber + hiddenIndex * step);

  return [question, answer];
};

const progression = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default progression;
