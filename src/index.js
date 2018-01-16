import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import LayoutContainer from './Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <LayoutContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
