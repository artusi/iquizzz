import React from 'react';
import Box from '@material-ui/core/Box';
import { messages } from './quiz.constants';

function Intro() {
  return (
    <>
      <Box mx="auto" mt={5}>
        {messages.warning}
      </Box>
    </>
  );
}

export default Intro;
