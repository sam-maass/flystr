import { AdvantageBox } from './../components/advantageBox';
import React from 'react';
import { connect } from 'react-redux';
import ImageHeader from '../../components/ImageHeader';
import StepsGrid from '../../components/StepsGrid';
import TripCardGrid from '../../components/TripCardGrid';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { fetchLandingpageDeals } from '../../actions/dealActions';
import { style } from './style';

class Landing extends React.Component {
  componentDidMount() {
    this.props.fetchLandingpageDeals();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>All Cheap flights in one place | Tripfixed</title>
          <meta
            name="description"
            content="Tripfixed makes cheap trips easy. Save up to 67% on flights and get notifications so you never miss a cheap flight again."
          />
        </Helmet>
        <ImageHeader />

        <div className={style}>
          <section>
            <h2 className="h2-text text-center">
              Find cheap travel destinations with ease
            </h2>
            <div className="grid">
              <div className="advantage-box-container">
                <AdvantageBox heading="Stay Flexible">
                  Sometimes you don’t need to travel on fixed dates. You just
                  want to know what is the best time to do your planned citytrip
                  on a budget. Tripfixed searches across all possible dates for
                  the next year and will always find the cheapest flight option.
                  No guesswork if it is cheaper to depart on thursdays. No trial
                  and error for each month. Just 60.000 date combinations with
                  one click.
                </AdvantageBox>
              </div>
              <div className="advantage-box-container">
                <AdvantageBox heading="Notifications Included">
                  You won’t find cheap flights to your dream destinations every
                  single day of the year. Sometimes you need to wait for the
                  next sale and Tripfixed helps you with Email- and
                  Push-Notifications. If the ticket price for your next vacation
                  drops significantly we will inform you right away.
                </AdvantageBox>
              </div>
              <div className="image-container double-height">
                <img src="/phone-with-tripfixed.png" />
              </div>
              <div className="advantage-box-container">
                <AdvantageBox heading="Find Travel Inspiration">
                  Not sure where you should go next? Browse through our daily
                  updated catalogue of flight deals and find travel inspiration.
                  You can simply favorite public deals and customize them to
                  your needs. Change to your preferred travel duration or add
                  new departure airports.
                </AdvantageBox>
              </div>
              <div className="advantage-box-container">
                <AdvantageBox heading="All Airports, One Search">
                  With normal flight search tools you have to get flight prices
                  for each destination separately. But sometimes you just want
                  to know where it is cheap to fly to in South East Asia.
                  Tripfixed allows you to search ticket prices for multiple
                  departure and destination airports at the same time.
                </AdvantageBox>
              </div>
              <div className="image-container">
                <img src="/example-trip.png" />
              </div>
            </div>
          </section>
          <section>
            <h2 className="h2-text text-center">
              Create Your Travel Bucket List
            </h2>
            <StepsGrid />
          </section>
          <section>
            <h2 className="h2-text text-center">Cheap Flight Deals</h2>
            <TripCardGrid deals={this.props.deals} />
            <div className="cta">
              <Link to="/deals">
                <span className="button">Discover all deals</span>
              </Link>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  deals: PropTypes.array,
  fetchLandingpageDeals: PropTypes.func
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    deals: store.landingpageDeals
  };
};

export default connect(
  mapStateToProps,
  { fetchLandingpageDeals }
)(Landing);
