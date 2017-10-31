import React from 'react';
import { Container, Heading3, FlowText, FlexRow } from './../style-components';
import TripTile from '../components/TripTile';

const Home = () => {
  return (
    <div className="index_page">
      <Container>
        <Heading3>Stop Searching for cheap flights</Heading3>
        <FlowText>
          Stop wasting your time crawling blogs and flight search engines for
          your next trip. Just enter places you want to go visit and get
          notified when a deal pops up.
        </FlowText>
        <FlexRow>
          <TripTile
            name="Europe-Trip"
            duration="12 days"
            season="Summer 2018"
            priceLimit="<500 €"
            status="active"
          />
          <TripTile
            name="Europe-Trip"
            duration="12 days"
            season="Summer 2018"
            priceLimit="<500 €"
            status="active"
          />
        </FlexRow>
      </Container>
    </div>
  );
};

export default Home;
