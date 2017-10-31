import React from 'react';
import PropTypes from 'prop-types';

const NewTripForm = ({ submitNewTrip, onInputChange, user, newTrip }) => {
  return (
    <div>
      <form onSubmit={submitNewTrip}>
        <label htmlFor="">Where do you wanna fly to?</label>
        <input
          type="text"
          name="destination"
          value={newTrip.destination}
          onChange={onInputChange}
        />
        <label htmlFor="">When?</label>
        <input
          type="text"
          name="date"
          value={newTrip.date}
          onChange={onInputChange}
        />
        {user._id && <button type="submit">Senden</button>}
      </form>
    </div>
  );
};

NewTripForm.propTypes = {
  submitNewTrip: PropTypes.func,
  onInputChange: PropTypes.func,
  user: PropTypes.any,
  newTrip: PropTypes.any
};

export default NewTripForm;
