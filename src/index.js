import { print, askQuestion } from './cli.js';

const flow = (rule, getQuestionAndAnswer) => {
  print('Welcome to brain games! ');
  const userName = askQuestion('May I have your name? ');
  print(`Hi ${userName}!`);
  print(rule);
  const rounds = 3;
  let questionsAsked = 0;
  while (questionsAsked < rounds) {
    const questionAndAnswer = getQuestionAndAnswer();
    const askedQuestion = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];
    print(`Question: ${askedQuestion}`);
    const userAnswer = askQuestion('Your answer: ');
    if (userAnswer === correctAnswer) {
      print('Correct!');
      questionsAsked += 1;
    } else {
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      print(`Let's try again, ${userName}`);
      return;
    }
  }
  print(`Congratulations, ${userName}!`);
};

export default flow;
