import React from 'react';
import PropTypes from 'prop-types';
import TripDealList from './component';
import { connect } from 'react-redux';
import TripView from './TripView';
import { setAppbar } from '../../actions/appbarActions';

const TripDealListContainer = ({ trips = [], tripId, setAppbar }) => {
  const trip = trips.find(trip => trip._id === tripId);
  setAppbar({
    title: trip.name,
    button: { text: 'edit', link: `/trip/${tripId}/edit` }
  });
  if (trip && trip.matchingFlights && trip.matchingFlights.length === 0) {
    return <TripView trip={trip} />;
  } else {
    return (
      <TripView trip={trip}>
        <TripDealList flights={trip.matchingFlights} />
      </TripView>
    );
  }
};

TripDealListContainer.propTypes = {
  trips: PropTypes.array,
  tripId: PropTypes.string
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    trips: store.trips
  };
};

export default connect(
  mapStateToProps,
  { setAppbar }
)(TripDealListContainer);
