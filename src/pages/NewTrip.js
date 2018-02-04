import React from 'react';
import NewTripForm from '../components/NewTripForm';

const NewTripPage = props => {
  return (
    <div>
      <NewTripForm {...props} />
    </div>
  );
};

export default NewTripPage;
