import { print, askQuestion } from './cli.js';

const rounds = 3;

const runGame = (rule, getQuestionAndAnswer) => {
  print('Welcome to brain games! ');
  const userName = askQuestion('May I have your name? ');
  print(`Hi ${userName}!`);
  print(rule);
  for (let questionsAsked = 0; questionsAsked < rounds; questionsAsked += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const [askedQuestion, correctAnswer] = questionAndAnswer;
    print(`Question: ${askedQuestion}`);
    const userAnswer = askQuestion('Your answer: ');
    if (userAnswer === correctAnswer) {
      print('Correct!');
    } else {
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      print(`Let's try again, ${userName}`);
      return;
    }
  }
  print(`Congratulations, ${userName}!`);
};

export default runGame;
