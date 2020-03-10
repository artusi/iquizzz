import React, { useState, useEffect } from 'react';
import Question from './question';
import Results from './results';

const initialQuestion = {
  title: '',
  answers: [],
  valid: null,
  userAnswer: null
};

export const initialState = {
  current: null,
  questions: []
};

function Quizzer({ data }) {
  const [questions, updateQuestions] = useState(initialState.questions);
  const [current, changeCurrent] = useState(initialState.current);

  // Set up questions
  useEffect(() => {
    if (data.questions && data.questions.length) {
      // Normalize questions
      const normalizeQuestions = data.questions.map(element => ({
        ...initialQuestion,
        ...element
      }));
      // Setup questions
      updateQuestions(normalizeQuestions);
      // Set first question
      changeCurrent(0);
    }
  }, []);

  // Answer question
  function onAnswerQuestion(userAnswer) {
    const updatedQuestions = questions.map((element, index) => {
      if (index === current) {
        // Update question
        return {
          ...element,
          userAnswer
        };
      }
      return element;
    });

    updateQuestions(updatedQuestions);
  }

  // Change questions
  function onChangeQuestion(count) {
    changeCurrent(current + count);
  }

  // Renders
  const lenQuestions = questions.length;

  // Loading
  if (!lenQuestions) return 'Carregando';

  // Questions
  if (lenQuestions > current) {
    const currentQuestion = questions[current];
    return (
      <Question
        onChangeQuestion={onChangeQuestion}
        onAnswerQuestion={onAnswerQuestion}
        title={currentQuestion.title}
        answers={currentQuestion.answers}
        userAnswer={currentQuestion.userAnswer}
        validAnswer={currentQuestion.valid}
      />
    );
  }

  // Results
  const rightAnswers = questions.reduce((sum, { userAnswer, valid }) => {
    const count = userAnswer == valid ? 1 : 0;
    return sum + count;
  }, 0);

  let result = 'Não há resultados';
  data.results.forEach(element => {
    if (rightAnswers >= element.rightAnswers) result = element.label;
  });

  return <Results rightAnswers={rightAnswers} result={result} />;
}

export default Quizzer;
