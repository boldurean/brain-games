import flow from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (steps) => {
  const progressionLength = 10;
  const startingNumber = getRandomNum(1, 50);
  const hiddenNumber = getRandomNum(1, 9);

  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startingNumber + i * steps);
  }
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

const getQuestionAndAnswer = () => getProgression(getRandomNum(1, 5));

const brainProgression = () => {
  flow(gameRule, getQuestionAndAnswer);
};

export default brainProgression;
