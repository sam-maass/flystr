import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'formik';

const FormRow = props => {
  return (
    <div
      className="form-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}
    >
      {props.children}
    </div>
  );
};

const NewTripForm = ({ errors, touched }) => {
  return (
    <Form style={{ display: 'grid' }}>
      <FormRow>
        <label htmlFor="origins">Origins:</label>
        <Field
          style={{ gridColumnStart: 2 }}
          type="text"
          name="origins"
          placeholder="AMS, JFK, LHR"
        />
        {errors.origins && (
          <div className="hint" style={{ gridColumn: '1 / span 2' }}>
            {errors.origins}
          </div>
        )}
      </FormRow>
      <FormRow>
        <label htmlFor="startDate">Start Date:</label>
        <Field type="text" name="startDate" placeholder="01.10.2017" />
        {errors.startDate && (
          <div className="hint" style={{ gridColumn: '1 / span 2' }}>
            {errors.startDate}
          </div>
        )}
      </FormRow>
      <FormRow>
        <label htmlFor="endDate">Return Date:</label>
        <Field type="text" name="endDate" placeholder="10.10.2017" />
        {errors.endDate && (
          <div className="hint" style={{ gridColumn: '1 / span 2' }}>
            {errors.endDate}
          </div>
        )}
      </FormRow>
      <FormRow>
        <label htmlFor="destinations">Destinations:</label>
        <Field type="text" name="destinations" placeholder="MIA, HNL, SIN" />
        {errors.destinations && (
          <div className="hint" style={{ gridColumn: '1 / span 2' }}>
            {errors.destinations}
          </div>
        )}
      </FormRow>
      <FormRow>
        <label htmlFor="budget">Budget:</label>
        <Field type="number" name="budget" placeholder="400" />
        {errors.budget && (
          <div className="hint" style={{ gridColumn: '1 / span 2' }}>
            {errors.budget}
          </div>
        )}
      </FormRow>
      <input type="submit" value="Send" />
    </Form>
  );
};

NewTripForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object
};

export default NewTripForm;
