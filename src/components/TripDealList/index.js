import React from 'react';
import PropTypes from 'prop-types';
import TripDealList from './component';
import { connect } from 'react-redux';
import TripView from './TripView';
import { setAppbar } from '../../actions/appbarActions';
import { fetchTrip } from '../../actions/tripActions';

class TripDealListContainer extends React.Component {
  static propTypes = {
    trip: PropTypes.object,
    tripId: PropTypes.string,
    setAppbar: PropTypes.func,
    fetchTrip: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchTrip(this.props.tripId);
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.trip || {})._id !== (this.props.trip || {})._id) {
      const { trip, setAppbar } = this.props;
      setAppbar({
        title: trip.name,
        button: { text: 'edit', link: `/trip/${trip._id}/edit` }
      });
    }
  }

  render() {
    const { trip } = this.props;
    if (!trip || !trip._id) return null;

    if (trip && trip.matchingFlights && trip.matchingFlights.length === 0) {
      return <TripView trip={trip} />;
    } else {
      return (
        <TripView trip={trip}>
          <TripDealList flights={trip.matchingFlights} />
        </TripView>
      );
    }
  }
}

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    trip: store.currentTrip
  };
};

export default connect(
  mapStateToProps,
  { setAppbar, fetchTrip }
)(TripDealListContainer);
