import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { colors } from '@material-ui/core';
import LaunchSignup from '../components/LaunchSignup';
import Footer from '../components/Footer';

const containerStyle = {
  gridColumn: 2,
  gridRow: 2
};

const gridStyle = {
  backgroundImage: 'url("/landing.jpg")',
  backgroundSize: 'cover',
  display: 'grid',
  gridGap: 10,
  gridTemplateAreas: '". . ." ". . ." ". footer ."',
  minHeight: '100vh',
  height: '100%',
  gridTemplateColumns: '1fr minmax(auto,800px) 1fr',
  gridTemplateRows: '200px 1fr 50px',
  backgroundPosition: '50%'
};

const logoStyle = {
  marginTop: 10,
  width: '80%',
  maxWidth: 400,
  justifySelf: 'center',
  gridColumn: 2,
  gridRow: 1,
  backgroundImage: 'url("/logo3.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%'
};

const headline = {
  textAlign: 'center',
  fontSize: '36px',
  textTransform: 'capitalize'
};

const advantageSection = {
  paddingTop: 50,
  paddingBottom: 50
};

const advantageDiv = {
  paddingTop: 15,
  paddingBottom: 15,
  display: 'flex'
};

const subheadline = {};

const bigIcon = {
  fontSize: 42,
  marginRight: 50,
  marginLeft: 20,
  height: 50
};

const underline = {
  width: 200,
  height: 5,
  backgroundColor: colors.orange.A700,
  margin: 'auto',
  marginTop: 10
};

class HomePage extends React.Component {
  handleClose = () => {
    this.setState({ openSnackbar: false });
  };

  render() {
    return (
      <div className="grid" style={gridStyle}>
        <div className="logo" style={logoStyle} />
        <div className="container" style={containerStyle}>
          <Card>
            <CardContent>
              <Typography variant="display2" component="h1" style={headline}>
                Get notified when flights are on sale
              </Typography>
              <div style={underline} />
              <br />
              <Typography component="p">
                Travel agencies will always make you overpay because they need
                to make a living off your money. And Flight Search Engines only
                give you a snapshot of whats happening, but prices change all
                the time. Flystr is here to make frugal travel easy again.
              </Typography>

              <section style={advantageSection}>
                <div style={advantageDiv}>
                  <div>
                    <span role="img" aria-label="globe" style={bigIcon}>
                      🌍
                    </span>
                  </div>
                  <div>
                    <Typography
                      component="h2"
                      variant="headline"
                      style={subheadline}
                    >
                      Where do you want to go?
                    </Typography>
                    <Typography>
                      Select your favorite destinations, add travel periods and
                      budget. Looking for a flight to New York in October and to
                      Japan in April or May? We&#39;ve got you covered!
                    </Typography>
                  </div>
                </div>

                <div style={advantageDiv}>
                  <div>
                    <span role="img" aria-label="Bot" style={bigIcon}>
                      🤖
                    </span>
                  </div>
                  <div>
                    <Typography
                      component="h2"
                      variant="headline"
                      style={subheadline}
                    >
                      Our bot finds your flight
                    </Typography>
                    <Typography>
                      Our bot is constantly online and on the lookout for the
                      best deals. We source blogs, forums, Twitter and
                      newsletters in addition to our own research. With years of
                      experience, we know how to find cheap flights.
                    </Typography>
                  </div>
                </div>

                <div style={advantageDiv}>
                  <div>
                    <span role="img" aria-label="message" style={bigIcon}>
                      📨
                    </span>
                  </div>
                  <div>
                    <Typography
                      component="h2"
                      variant="headline"
                      style={subheadline}
                    >
                      Get notified and book your flight
                    </Typography>
                    <Typography>
                      We will notify you once we have found a deal that fits for
                      you. Get all the information you need and a link to the
                      cheapest booking option within minutes of us discovering a
                      deal. Never again miss out on a deal.
                    </Typography>
                  </div>
                </div>

                <div style={advantageDiv}>
                  <div>
                    <span role="img" aria-label="airplane" style={bigIcon}>
                      🛫
                    </span>
                  </div>
                  <div>
                    <Typography
                      component="h2"
                      variant="headline"
                      style={subheadline}
                    >
                      Discover the world on a budget
                    </Typography>
                    <Typography>
                      Enjoy your flight and keep discovering new places. We
                      believe that this is the best way to make you happy. And
                      best of all, you can now spend your money on experiences
                      instead of paying overpriced airline tickets.
                    </Typography>
                  </div>
                </div>
              </section>
              <Typography variant="display2" component="h2" style={headline}>
                Try Flystr
              </Typography>
              <div style={underline} />
              <br />
              <Typography component="p">
                <i>
                  We&#39;re still in development, but you can be one of the
                  first to get cheap flight notifications. Leave us an email and
                  we will provide you with a beta login soon.
                </i>
              </Typography>
              <LaunchSignup />
            </CardContent>
          </Card>
        </div>
        <div style={{ gridArea: 'footer' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
