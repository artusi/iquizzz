import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './shared/theme';
import Views from './views';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Views />
    </ThemeProvider>
  );
}

export default App;
