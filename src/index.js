import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import LayoutContainer from './Layout';
import registerServiceWorker from './registerServiceWorker';
import './injectGlobalStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { styles } from './styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: styles.colors.blue3 },
    secondary: { main: styles.colors.orange },
    typography: {
      fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(',')
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <LayoutContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
