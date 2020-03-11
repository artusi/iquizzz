import React from 'react';
import { Container, Box, Card, CardContent } from '@material-ui/core';
import { questionnaire } from '../../../data/questionnaire';
import Quizzer from '../../components/Quizzer/quizzer';

function Quiz() {
  return (
    <Container maxWidth="sm">
      <Card>
        <Box px={4}>
          <CardContent>
            <Quizzer data={questionnaire} />
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
}

export default Quiz;
