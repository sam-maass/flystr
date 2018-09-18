import express from 'express';
import helmet from 'helmet';

// we'll talk about this in a minute:
import serverRenderer from './middleware/renderer';
import { loadDeals, loadDeal, loadRecentDeals } from './loadDeals';

const PORT = 3100;
const path = require('path');

// initialize the application and create the routes
const app = express();
app.use(helmet());
app.get('/health-check', (req, res) => res.sendStatus(200));

// other static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, '..', 'build'), {
    maxAge: '30d',
    index: false
  })
);

// root (/) should always serve our server rendered page
app.get('/deal/:slug', loadDeal, serverRenderer);
app.get('/deals', loadDeals, serverRenderer);
app.get(/^\/$/, loadRecentDeals, serverRenderer);

// all other routes should return index.html
// TODO: check if route exists
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../build/index.html`));
});

// start the app
app.listen(PORT, error => {
  if (error) {
    // eslint-disable-next-line
    return console.log('something bad happened', error);
  }

  // eslint-disable-next-line
  console.log(`listening on ${PORT}...`);
});
