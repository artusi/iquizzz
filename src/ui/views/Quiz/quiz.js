import React from 'react';
import Box from '@material-ui/core/Box';
import { questionnaire } from '../../../data/questionnaire';
import Quizzer from '../../components/Quizzer/quizzer';

function Quiz() {
  return (
    <>
      <Box mx="auto" mt={5}>
	<Quizzer data={questionnaire} />
      </Box>
    </>
  );
}

export default Quiz;
