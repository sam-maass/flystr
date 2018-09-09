import React from 'react';
import LayoutContainer from './Layout';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { styles } from './styles';
import './injectGlobalStyles';

const theme = createMuiTheme({
  palette: {
    primary: { main: styles.colors.blue3 },
    secondary: { main: styles.colors.orange },
    typography: {
      fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(',')
    }
  }
});

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <LayoutContainer />
    </MuiThemeProvider>
  );
};
