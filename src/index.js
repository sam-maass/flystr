import React from 'react';
import { hydrate } from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
const ClientApp = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

hydrate(ClientApp, rootElement);

// registerServiceWorker();
