import express from 'express';

// we'll talk about this in a minute:
import serverRenderer from './middleware/renderer';

const PORT = 3100;
const path = require('path');

// initialize the application and create the routes
const app = express();

// root (/) should always serve our server rendered page
app.get(/^\/$/, serverRenderer);

// other static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

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
