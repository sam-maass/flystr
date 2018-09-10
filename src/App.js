import React from 'react';
import LayoutContainer from './Layout';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './injectGlobalStyles';
import { createTheme } from './theme';
const theme = createTheme();

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <LayoutContainer />
    </MuiThemeProvider>
  );
};
