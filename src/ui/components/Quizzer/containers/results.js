import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import styles from './styles/results.module.scss';

function Result({ result, rightAnswers }) {
  return (
    <>
      <Box align="center">
        <Typography
          variant="subtitle1"
          component="p"
          align="center"
          gutterBottom
        >
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
        <Link to="/" className="primary-link">
          Fazer o teste novamente
        </Link>
      </Box>
    </>
  );
}

Result.propTypes = {
  result: PropTypes.string.isRequired,
  rightAnswers: PropTypes.number.isRequired
};

export default Result;
