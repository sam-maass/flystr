import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { updateServiceWorker } from './updateServiceWorker';
import * as Sentry from '@sentry/browser';
import { SentryErrorBoundary } from './SentryErrorBoundary';

Sentry.init({
  dsn: 'https://14223c501b2b4b2382c75b6e2df2166f@sentry.io/1334792'
});

const rootElement = document.getElementById('root');
const ClientApp = (
  <SentryErrorBoundary>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </SentryErrorBoundary>
);

//remove server renderered jssStyles
const jssStyles = document.getElementById('jss-server-side');
if (jssStyles && jssStyles.parentNode) {
  jssStyles.parentNode.removeChild(jssStyles);
}

hydrate(ClientApp, rootElement);
updateServiceWorker();
