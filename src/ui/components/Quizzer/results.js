import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import styles from './styles/results.module.scss';

function Result({ result, rightAnswers }) {
  return (
    <>
      <Box align="center">
        <Typography variant="p" component="p" align="center" gutterBottom>
          Você acertou <strong>{rightAnswers}</strong>
        </Typography>
        <Typography variant="h6" align="center">
          {result}
        </Typography>
        <img
          src="https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif"
          alt="Parabéns"
          className={styles.congratulationsImg}
        />
        <Link to="/">Fazer o teste novamente</Link>
      </Box>
    </>
  );
}

export default Result;
