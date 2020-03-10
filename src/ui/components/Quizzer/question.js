import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

function Question({
  title,
  answers,
  validAnswer,
  userAnswer,
  onAnswerQuestion,
  onChangeQuestion
}) {
  // Render question
  function onChangetAnswer(event) {
    onAnswerQuestion(event.target.value);
  }
  function onSelectAnswer(event) {
    onAnswerQuestion(event.target.value);
    onChangeQuestion(1);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"> {title}</FormLabel>
      <RadioGroup name="customized-radios">
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
      <Button variant="contained" color="primary" onClick={onSelectAnswer}>
	Próximo
      </Button>
    </FormControl>
  );
}

export default Question;
