import React from 'react';
import { Box, Card, CardContent } from '@material-ui/core';
import { questionnaire } from '../../../data/questionnaire';
import Quizzer from '../../components/Quizzer/quizzer';

function Quiz() {
  return (
    <Card>
      <Box px={4}>
        <CardContent>
          <Quizzer data={questionnaire} />
        </CardContent>
      </Box>
    </Card>
  );
}

export default Quiz;
