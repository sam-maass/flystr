import React from 'react';
import { Typography } from '../components/Typography/Typography';
import { css } from 'emotion';
import { classes } from '../styles';

const style = css`
  padding: 8px;
  max-width: 1000px;
  margin: auto;
  section {
    margin-top: 64px;
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
      <Typography variant="h3">How to pay less for flights</Typography>
      <p>
        <Typography>
          There are many reasons why you might overpay for a flight. Here is how
          to avoid expensive flights and what you can do to always get the
          cheapest ticket price.
        </Typography>
      </p>
      <section>
        <Typography variant="h4">1. Book the right dates</Typography>

        <p>
          <Typography>
            Flying on the wrong dates is the number one reason for overpaying on
            airline tickets. Flights are priced based on demand and to get cheap
            flights you have to take flights when no one else does.{' '}
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
            Flying on the wrong dates is the number one reason for overpaying on
            airline tickets. Flights are priced based on demand and to get cheap
            flights you have to take flights when no one else does.
            <ul>
              <li>
                Long-Haul flights are are 20% cheaper leaving Thursday and
                returning Monday
              </li>
              <li>
                Short-Haul flights are cheapest leaving on Saturday and
                returning on Tuesday{' '}
              </li>
              <li>
                Prices may vary depending on route on season and route. It's
                best to check for multiple date combinations
              </li>
            </ul>
          </Typography>
        </p>
      </section>
      <section>
        <Typography variant="h4">2. Look for secondary airports</Typography>
        <p>
          <Typography>
            Airport fees are a big part of the price of an airline ticket.
            Secondary airports charge less and airlines tend to use these
            savings to provide cheaper tickets. Try to find nearby airports and
            look for good prices.
          </Typography>
        </p>
      </section>
      <section>
        <Typography variant="h4">3. Book at the right time</Typography>
        <p>
          <Typography>
            Booking at the right moment is probably the most important part.
            Airlines change flight prices multiple times a day, there are sales
            and seasonal variation.
            <div className="pricing-container">
              <img
                className="pricing"
                src="/pricing.svg"
                alt="Example Pricing"
              />
            </div>
            <ul>
              <li>Check multiple times a week if prices have changed</li>
              <li>
                During hours of high demand (weekends and holidays) prices can
                go up by 20%
              </li>
              <li>
                Besides Black Friday, all airlines will have special sales on
                different days. So signup for these newsletters
              </li>
              <li>
                8 to 4 weeks in advance is normally a good time to book flights
              </li>
            </ul>
          </Typography>
        </p>
      </section>
      <section>
        <Typography variant="h4">4. Book on the right platform</Typography>
        <p>
          <Typography>
            There are hundreds if not thousands of flight booking sites. In most
            cases you are however covered with the 4 biggest flight price
            comparison pages. Use sites like Google Fligths, Skyscanner, Momondo
            or Kayak.
          </Typography>
        </p>
      </section>
      <section>
        <Typography variant="h4">5. Factor in your own time</Typography>
        <Typography>
          <p>
            Ok, here is the thing. Finding cheap flights is ridicolously
            complex. That 200 Euro flight to Singapore, yeah that took some 50
            hours of work. Even at minimum wage you could have earned 500 Euros
            in the same time.
          </p>
          <p>That is the reason why I have build flystr.</p>
        </Typography>
      </section>
    </div>
  );
};

export default ProductPage;
