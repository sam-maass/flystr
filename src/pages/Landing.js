import React from 'react';
import { connect } from 'react-redux';
import ImageHeader from '../components/ImageHeader';
import SubHeadline from '../components/SubHeadline';
import StepsGrid from '../components/StepsGrid';
import { css } from 'emotion';
import TripCardGrid from '../components/TripCardGrid';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { classes, styles } from '../styles';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { fetchLandingpageDeals } from '../actions/dealActions';

const maxWidth = css`
  max-width: 100vw;
  width: 1280px;
  overflow: hidden;
  margin: auto;
  padding: 0 8px 0 8px;
  .cta{
    max-width: 600px;
    margin: auto;
    text-align:center;
    a{
      text-decoration:none
    }
    .button {
    border-radius: 4px;
    background-color: ${styles.colors.orange};
    color: ${styles.colors.white};
    padding: 8px 16px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    ${classes.typography.title};
    font-weight: bold;

  }
`;

class Landing extends React.Component {
  componentDidMount() {
    this.props.fetchLandingpageDeals();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Flystr | All Cheap flights in one place</title>
          <meta
            name="description"
            content="Find all the cheap flight deals in one place. We aggregate the cheapest fares daily so that you don't need too search"
          />
        </Helmet>
        <ImageHeader />
        <div className={maxWidth}>
          <SubHeadline withBar>how it works</SubHeadline>
          <StepsGrid />
          <SubHeadline withBar>deals we found last week</SubHeadline>
          <TripCardGrid deals={this.props.deals} />
          <div className="cta">
            <Link to="/deals">
              <span className="button">Discover all deals</span>
            </Link>
          </div>
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
