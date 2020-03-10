import React, { useState, useEffect } from 'react';
import Question from './question';

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
    console.log('userAnswer', userAnswer);
    const updatedQuestions = questions.map((element, index) => {
      if (index === current)
	return {
	  ...element,
	  userAnswer
	};
      return element;
    });

    updateQuestions(updatedQuestions);
  }

  // Change questions
  function onChangeQuestion(count) {
    changeCurrent(current + count);
  }
  if (!questions.length) return 'empty';

  // Render question
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

export default Quizzer;
