import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { messages } from './intro.constants';

function Intro() {
  return (
    <>
      <Box mx="auto" mt={5} align="center">
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          {messages.title}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {messages.introduction}
        </Typography>
        <Box m={2} />
        <Link href="./quiz">{messages.buttonLabel}</Link>
      </Box>
    </>
  );
}

export default Intro;
