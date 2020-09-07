import { log, question } from './cli.js';

const startGame = (rules, getQuestionAndAnswer) => {
  log('Welcome to brain games! ');
  const userName = question('May I have your name? ');
  log(`Hi ${userName}!`);
  log(rules);
  let rounds = 0;
  while (rounds < 3) {
    const questionAndAnswer = getQuestionAndAnswer();
    log(`Question: ${questionAndAnswer[0]}`);
    const userAnswer = question('Your answer: ');
    if (userAnswer === questionAndAnswer[1]) {
      log('Correct!');
      rounds += 1;
    } else {
      log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionAndAnswer[1]}"`);
      log(`Let's try again, ${userName}`);
      return;
    }
  }
  log(`Congratulations, ${userName}!`);
};

export default startGame;
