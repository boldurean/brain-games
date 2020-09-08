import startGame from '../index.js';
import getRandomNum from '../math.js';

const getQuestionAndAnswer = () => {
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
        answer = String(i);
        result = `${result} ..`;
        i += steps;
      }
      result = `${result} ${i}`;
    }
    return result;
  };
  return [getProgression(getRandomNum(1, 5)), answer];
};

const brainProgression = () => {
  startGame('What number is missing in the progression?', getQuestionAndAnswer);
};

export default brainProgression;
