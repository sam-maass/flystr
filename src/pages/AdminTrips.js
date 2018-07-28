import React from 'react';
import { connect } from 'react-redux';
import { fetchAllTrips } from '../actions/adminActions';
import TripTable from '../components/TripTable';
import PropTypes from 'prop-types';

class AdminTrips extends React.Component {
  componentDidMount() {
    this.props.fetchAllTrips();
  }

  render() {
    return <TripTable trips={this.props.allTrips} />;
  }
}

AdminTrips.propTypes = {
  fetchAllTrips: PropTypes.func.isRequired,
  allTrips: PropTypes.array.isRequired
};

const mapStateToProps = (store, props) => {
  return {
    allTrips: store.allTrips,
    ...props
  };
};

export default connect(
  mapStateToProps,
  { fetchAllTrips }
)(AdminTrips);
