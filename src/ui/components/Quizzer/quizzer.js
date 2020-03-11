import React, { useState, useEffect } from 'react';
import {
  initialState,
  normalizeQuestions,
  updateQuestionAnswer,
  getResults
} from './quizzer.operator';
import Question from './containers/question';
import Results from './containers/results';

function Quizzer({ data }) {
  const [questions, updateQuestions] = useState(initialState.questions);
  const [current, changeCurrent] = useState(initialState.current);

  // Set up questions
  useEffect(() => {
    if (data.questions && data.questions.length) {
      // Normalize questions
      const normalizedQuestions = normalizeQuestions(data.questions);
      // Setup questions
      updateQuestions(normalizedQuestions);
      // Set first question
      changeCurrent(0);
    }
  }, []);

  // Answer question
  function onAnswerQuestion(userAnswer) {
    const updatedQuestions = updateQuestionAnswer(
      questions,
      current,
      userAnswer
    );
    updateQuestions(updatedQuestions);
  }

  // Change questions
  function onChangeQuestion(count) {
    changeCurrent(current + count);
  }

  // Renders
  const lenQuestions = questions.length;
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
  const { rightAnswers, result } = getResults(questions, data.results);

  return <Results rightAnswers={rightAnswers} result={result} />;
}

export default Quizzer;
