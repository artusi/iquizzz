import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Result({ result, rightAnswers }) {
  return (
    <>
      <Box>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Você acertou {rightAnswers}
        </Typography>
        <Typography variant="h5" component="h3" align="center">
          {result}
        </Typography>
      </Box>
    </>
  );
}

export default Result;
