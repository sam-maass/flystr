import React from 'react';
import { Typography } from '../components/Typography/Typography';
import { Underlined } from '../components/Typography/Underlined';
import { css } from 'emotion';
import { classes } from '../styles';
import { Card, CardContent } from '@material-ui/core';

const style = css`
  padding: 8px;
  max-width: 1000px;
  margin: auto;
  section {
    margin: 16px 0;
  }
  .pricing-container {
    display: grid;
    justify-items: center;

    .pricing {
      width: 100%;
      max-width: 600px;
    }
  }
  .header-image {
    background: url('https://flystr.com/destination-images/header-wide/FLL.jpg');
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 40vw;
    max-height: 300px;
    border-radius: 4px;
  }
  .table {
    max-width: 600px;
    margin: 16px auto;
    ${classes.typography.base}
    font-size:.8em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-content: center;
    text-align: center;
    > * {
      padding: 4px;
      color: #666;
      background-color: #f5f6fd;
      border: 1px solid #fff;
      height: 100%;
    }
    .best {
      font-weight: bold;
      color: #388e3c;
      background-color: #c8e6c9;
      transform: scale(1.2);
    }
    .red {
      background-color: #ffcdd2;
      color: #e53935;
    }
    .yellow {
      background-color: #fff9c4;
      color: #f57f17;
    }
    .green {
      background-color: #c8e6c9;
      color: #43a047;
    }
  }
`;
const ProductPage = () => {
  return (
    <div className={style}>
      <div className="header-image" />
      <Underlined>
        <Typography variant="h2">Why you should use Flystr</Typography>
      </Underlined>
      <section>
        <Card>
          <CardContent>
            <Typography variant="h4">
              <b>TL;DR</b>
            </Typography>
            <Typography>
              <p>
                Finding cheap flights is time-consuming. There are over 60.000
                possible date combinations for outbound and inbound flight.
                Flight prices change multiple times each day. You need to find
                and compare flights to and from different airports in the same
                region. And finally, in order to find the cheapest flight you
                need to query hundreds of online travel agencies.
              </p>
              <p>
                Flystr is here to change all this. We check thousands of flight
                prices every day and send you notifications when your future
                trip is on sale. Starting is easy. Just copy one of our deals to
                your watchlist or create a trip from scratch. Activate
                notifications and we will keep you informed. Never miss a cheap
                flight again.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardContent>
            <Typography variant="h4">1. We look at all the dates</Typography>

            <p>
              <Typography>
                Flying on the wrong dates is the number one reason for
                overpaying on airline tickets. Flights are priced based on
                demand and to get cheap flights you have to fly when no one else
                does.{' '}
              </Typography>
            </p>
            <div className="table">
              <div>Departure/ Return</div>
              <div>01.03.</div>
              <div>02.03.</div>
              <div>03.03.</div>
              <div>04.03.</div>
              <div>21.03.</div>
              <div className="red">529 EUR</div>
              <div className="red">529 EUR</div>
              <div className="yellow">499 EUR</div>
              <div className="yellow">499 EUR</div>
              <div>22.03.</div>
              <div className="red">509 EUR</div>
              <div className="red">519 EUR</div>
              <div className="best">379 EUR</div>
              <div className="yellow">409 EUR</div>
              <div>23.03.</div>
              <div className="red">509 EUR</div>
              <div className="red">539 EUR</div>
              <div className="green">389 EUR</div>
              <div className="yellow">419 EUR</div>
            </div>
            <p>
              <Typography>
                <p>
                  To guarantee you the best price for your flight we look up
                  every possible date combination for a route. We then filter
                  flights to your needs. You can state your earliest possible
                  departure date and the latest possible return date
                </p>
              </Typography>
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardContent>
            <Typography variant="h4">2. We look at all the airports</Typography>
            <p>
              <Typography>
                Airport fees are a big part of the price of an airline ticket.
                Secondary airports charge less and airlines tend to use these
                savings to provide cheaper tickets. A flight to London, for
                example, could be much cheaper if you do not choose Heathrow
                Airport but one of 4 alternative London airports. We offer you
                to enter alternative airports so that you can see the full
                picture.
              </Typography>
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardContent>
            <Typography variant="h4">
              3. We track prices continuously
            </Typography>
            <p>
              <Typography>
                Booking at the right moment is probably the most important part
                of scoring cheap flight tickets. Airlines change flight prices
                multiple times a day, there are sales and seasonal variation.
                <div className="pricing-container">
                  <img
                    className="pricing"
                    src="/pricing.svg"
                    alt="Example Pricing"
                  />
                </div>
                <ul>
                  <li>We check prices multiple times a day</li>
                  <li>
                    We also check during night hours and when you are busy
                    working
                  </li>
                  <li>
                    We immediately see when an airline starts a sale and update
                    the prices
                  </li>
                  <li>
                    We keep track of prices and know what makes a good deal
                  </li>
                  <li>
                    <b>
                      We inform you within minutes after we found a price drop
                    </b>
                  </li>
                </ul>
              </Typography>
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardContent>
            <Typography variant="h4">
              4. We offer multiple booking sites
            </Typography>
            <p>
              <Typography>
                There are hundreds if not thousands of flight booking sites. And
                we use various flight search engines and online travel agencies
                to provide you with the cheapest possible flight.
              </Typography>
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardContent>
            <Typography variant="h4">5. We value your time</Typography>
            <Typography>
              <p>
                Finding cheap flights takes a surprisingly big amount of time.
                So much that if you were to factor in your own time it would not
                make much sense to look for these flights on your own.
              </p>
              <p>
                Flystr is here to help. Set up your watchlist once and we will
                do all the hard work. We update 200.000 flights every few hours
                so that you can enjoy your life. And once we find the flight
                deal you were looking for we let you know. Start for free with
                up to 2 trips in your watchlist and once you need more plans
                start from 2,49 EUR/month.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ProductPage;
