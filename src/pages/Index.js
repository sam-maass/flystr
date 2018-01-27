import React from 'react';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

const containerStyle = {
  gridColumn: 2,
  gridRow: 2
};

const gridStyle = {
  backgroundImage: 'url("/landing.jpg")',
  backgroundSize: 'cover',
  display: 'grid',
  gridGap: 32,
  minHeight: '100vh',
  gridTemplateColumns: '1fr minmax(auto,800px) 1fr',
  gridTemplateRows: '1fr 400px 1fr',
  backgroundPosition: '50%'
};

const logoStyle = {
  marginTop: 10,
  width: '80%',
  maxWidth: 400,
  justifySelf: 'center',
  gridColumn: 2,
  gridRow: 1,
  backgroundImage: 'url("/logo2.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%'
};

const listStyle = {
  listStyle: 'none',
  paddingLeft: 10
};

const Index = () => {
  return (
    <div className="grid" style={gridStyle}>
      <div className="logo" style={logoStyle} />
      <div className="container" style={containerStyle}>
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
              Easy & cheap flights
            </Typography>
            <br />
            <Typography component="p">
              Travelagencies will always make you overpay, because they need to
              make a living of your money. And Flight Search Engines only give
              you a snapshot of whats happening, but prices change all the time.
              Flystr is here to make frugal travel easy again.
            </Typography>
            <ul style={listStyle}>
              <li>
                <Typography>
                  <span role="img" aria-label="globe">
                    🌍
                  </span>{' '}
                  Add all your destinations
            </Typography>
              </li>
              <li>
                <Typography>
                  <span role="img" aria-label="Bot">
                    🤖
                  </span>{' '}
                  Let our bot do the searching
            </Typography>
              </li>
              <li>
                <Typography>
                  <span role="img" aria-label="message">
                    📨
                  </span>{' '}
                  Get notified when a good deal comes up
            </Typography>
              </li>
              <li>
                <Typography>
                  <span role="img" aria-label="airplane">
                    🛫
                  </span>{' '}
                  Save money, go everywhere
            </Typography>
              </li>
            </ul>
            <Typography component="p">
              <b>No more searching, no more overpaying.</b>
              <br />
              <i>Coming soon...</i>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
