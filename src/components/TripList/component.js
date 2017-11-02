import React from 'react';
import PropTypes from 'prop-types';
import TripTile from '../TripTile';
import { FlexRow } from '../../style-components';

const TripList = ({ trips = [] }) => {
  return (
    <FlexRow>
      {trips.map((item, key) => <TripTile key={key} {...item} />)}
    </FlexRow>
  );
};

TripList.propTypes = { trips: PropTypes.array };

export default TripList;
