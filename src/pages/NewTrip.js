import React from 'react';
import { Container, Heading1 } from '../style-components';
import NewTripForm from '../components/NewTripForm';

const NewTrip = () => {
  return (
    <div>
      <Container>
        <Heading1>Add a trip</Heading1>
        <NewTripForm />
      </Container>
    </div>
  );
};

export default NewTrip;
