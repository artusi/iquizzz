export const initialQuestion = {
  title: '',
  answers: [],
  valid: null,
  userAnswer: null
};

export const initialState = {
  current: null,
  questions: []
};

export function normalizeQuestions(questions) {
  return questions.map(element => ({
    ...initialQuestion,
    ...element
  }));
}

export function updateQuestionAnswer(questions, questionIndex, userAnswer) {
  return questions.map((element, index) => {
    if (index === questionIndex) {
      // Update question
      return {
        ...element,
        userAnswer
      };
    }
    return element;
  });
}

export function getResults(questions, results) {
  const rightAnswers = questions.reduce((sum, { userAnswer, valid }) => {
    const count = userAnswer == valid ? 1 : 0;
    return sum + count;
  }, 0);

  let result = 'Não há resultados';
  results.forEach(element => {
    if (rightAnswers >= element.rightAnswers) result = element.label;
  });

  return {
    rightAnswers,
    result
  };
}
