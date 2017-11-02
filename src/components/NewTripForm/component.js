import React from 'react';
import PropTypes from 'prop-types';
import LabeledInput from '../LabeledInput';

const NewTripForm = ({ submitNewTrip, onInputChange, user, newTrip }) => {
  return (
    <div>
      <form onSubmit={submitNewTrip}>
        <LabeledInput
          name="destinations"
          type="text"
          label="Where do you wanna fly to?"
          value={newTrip.destinations}
          onChange={onInputChange}
        />
        <LabeledInput
          name="startDate"
          type="date"
          label="When do you want to leave?"
          value={newTrip.startDate}
          onChange={onInputChange}
        />
        <LabeledInput
          name="duration"
          type="number"
          label="How long do you want to stay? (days)"
          value={newTrip.duration}
          onChange={onInputChange}
        />
        <LabeledInput
          name="maxPrice"
          type="number"
          label="What is your max price? (EUR)"
          value={newTrip.maxPrice}
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
