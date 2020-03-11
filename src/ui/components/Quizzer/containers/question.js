import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

function Question({
  title,
  answers,
  userAnswer,
  onAnswerQuestion,
  onChangeQuestion
}) {
  // Render question
  function onChangetAnswer(event) {
    const answer = parseInt(event.target.value, 10);
    onAnswerQuestion(answer);
  }
  function onSelectAnswer() {
    onChangeQuestion(1);
  }

  return (
    <>
      <FormControl component="fieldset">
        <Box my={2}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
        </Box>
        <RadioGroup name="quiz-radios">
          {answers.map((answer, index) => (
            <FormControlLabel
              control={<Radio onChange={onChangetAnswer} />}
              value={index}
              label={answer}
              checked={userAnswer == index}
              key={answer}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box align="right">
        <Button
          variant="contained"
          color="secondary"
          onClick={onSelectAnswer}
          disabled={userAnswer === null}
        >
          Próximo
        </Button>
      </Box>
    </>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  userAnswer: PropTypes.number,
  onAnswerQuestion: PropTypes.func.isRequired,
  onChangeQuestion: PropTypes.func.isRequired
};
Question.defaultProps = {
  userAnswer: null
};

export default Question;
