import runGame from '../index.js';
import { getRandomNum } from '../utilities.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startingNumber, length, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(startingNumber + i * step);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const startingNumber = getRandomNum(1, 50);
  const hiddenIndex = getRandomNum(1, progressionLength - 1);
  const step = getRandomNum(1, 5);
  const progression = getProgression(startingNumber, progressionLength, step);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const answer = String(startingNumber + hiddenIndex * step);

  return [question, answer];
};

const runProgression = () => {
  runGame(gameRule, getQuestionAndAnswer);
};

export default runProgression;
