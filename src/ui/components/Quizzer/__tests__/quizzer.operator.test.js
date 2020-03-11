import {
  normalizeQuestions,
  updateQuestionAnswer,
  getResults
} from '../quizzer.operator';

const mockData = {
  questions: [
    {
      title: 'Mock Question',
      answers: [5, 6, 7, 8, 49],
      valid: 2
    }
  ],
  results: [
    {
      label: 'Result mock',
      rightAnswers: 0
    }
  ]
};
const normalizedQuestions = [
  {
    answers: [5, 6, 7, 8, 49],
    title: 'Mock Question',
    valid: 2,
    userAnswer: null
  }
];

test('[normalizeQuestions]', () => {
  // then
  const result = normalizeQuestions(mockData.questions);
  // when
  expect(normalizedQuestions).toEqual(result);
});

test('[updateQuestionAnswer]', () => {
  // given
  const expected = [
    {
      ...normalizedQuestions[0],
      userAnswer: 1
    }
  ];
  // then
  const result = updateQuestionAnswer(mockData.questions, 0, 1);
  // when
  expect(expected).toEqual(result);
});

test('[getResults]', () => {
  // given
  const expected = { result: 'Result mock', rightAnswers: 0 };
  // then
  const result = getResults(normalizedQuestions, mockData.results);
  // when
  expect(expected).toEqual(result);
});
