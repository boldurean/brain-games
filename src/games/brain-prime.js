import startGame from '../index.js';
import getRandomNum from '../math.js';

const getAnswerAndQuestion = () => {
  let answer;
  const num = getRandomNum(1, 100);

  const isPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        answer = 'no';
        return answer;
      }
    }
    answer = 'yes';
    return answer;
  };
  isPrime(num);
  return [num, answer];
};

const brainPrime = () => {
  startGame('Answer "yes" if given number is prime. Otherwise answer "no".', getAnswerAndQuestion);
};

export default brainPrime;
