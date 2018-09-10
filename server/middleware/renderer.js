import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Loadable from 'react-loadable';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';
import {
  createGenerateClassName,
  MuiThemeProvider
} from '@material-ui/core/styles';

// import our main App component
import App from '../../src/App';
import store from '../../src/store';

// import the manifest generated with the create-react-app build
import manifest from '../../build/asset-manifest.json';
import { createTheme } from '../../src/theme';
// function to extract js assets from the manifest
const extractAssets = (assets, chunks) =>
  Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

const path = require('path');
const fs = require('fs');

export default (req, res) => {
  // get the html file created with the create-react-app build
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      // eslint-disable-next-line
      console.error('err', err);
      return res.status(404).end();
    }

    const modules = [];

    // render the app as a string
    const context = {};

    if (req.fetchedDeals) {
      store.dispatch({
        type: 'FETCH_DEALS_FULFILLED',
        payload: { data: req.fetchedDeals.data }
      });
    }

    if (req.currentDeal) {
      store.dispatch({
        type: 'FETCH_DEAL_FULFILLED',
        payload: { data: req.currentDeal.data }
      });
    }

    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();
    // Create a new class name generator.
    const generateClassName = createGenerateClassName();

    const theme = createTheme();
    // Create a sheetsManager instance.
    const sheetsManager = new Map();

    const html = renderStylesToString(
      ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <ReduxProvider store={store}>
            <StaticRouter location={req.url} context={context}>
              <JssProvider
                registry={sheetsRegistry}
                generateClassName={generateClassName}
              >
                <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                  <App />
                </MuiThemeProvider>
              </JssProvider>
            </StaticRouter>
          </ReduxProvider>
        </Loadable.Capture>
      )
    );

    // Grab the CSS from our sheetsRegistry.
    const css = sheetsRegistry.toString();

    // get the stringified state

    const reduxState = '{}';

    // map required assets to script tags
    const extraChunks = extractAssets(manifest, modules).map(
      c => `<script type="text/javascript" src="/${c}"></script>`
    );

    // now inject the rendered app into our html and send it to the client
    return res.send(
      htmlData
        // write the React app
        .replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div> <style id="jss-server-side">${css}</style>`
        )
        // write the string version of our state
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
        // append the extra js assets
        .replace('</body>', `${extraChunks.join('')}</body>`)
    );
  });
};
