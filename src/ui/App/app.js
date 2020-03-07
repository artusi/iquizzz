import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import './styles/app.scss';
import { messages } from './app.constants';
import theme from '../../shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Grid container spacing={1}>
          <Box mx="auto" mt={5}>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
              {messages.title}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {messages.introduction}
            </Typography>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
