import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { updateServiceWorker } from './updateServiceWorker';

const rootElement = document.getElementById('root');
const ClientApp = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

//remove server renderered jssStyles
const jssStyles = document.getElementById('jss-server-side');
if (jssStyles && jssStyles.parentNode) {
  jssStyles.parentNode.removeChild(jssStyles);
}

hydrate(ClientApp, rootElement);
updateServiceWorker();
