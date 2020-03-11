import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { messages } from './intro.constants';
import styles from './styles/intro.module.scss';

function Intro() {
  return (
    <>
      <Box mx="auto" align="center">
        <img
          src="https://media.giphy.com/media/Uc63DLTrbmqvS/giphy.gif"
          alt="Harry Potter"
          className={styles.introImg}
        />
        <Typography variant="subtitle1" component="p">
          {messages.introduction}
        </Typography>
        <Box m={2} />
        <Link to="/quiz">{messages.buttonLabel}</Link>
      </Box>
    </>
  );
}

export default Intro;
