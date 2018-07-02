import React from 'react';
import { css } from 'emotion';
import worldIcon from '../../images/world.svg';
import searchIcon from '../../images/search.svg';
import notificationIcon from '../../images/notifications_active.svg';
import StepContainer from '../StepContainer';

const threeItemGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr;
  justify-items: center;
  grid-gap: 16px;
  align-items: flex-start;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const StepsGrid = () => {
  return (
    <div className={threeItemGrid}>
      <StepContainer
        icon={worldIcon}
        title={<span>choose your destinations</span>}
        text="Select your favorite destinations, add travel periods and budget. Looking for a flight to New York in October and to Japan in April or May? We've got you covered!"
      />
      <StepContainer
        icon={searchIcon}
        title={
          <span>
            we find the<br /> best deals
          </span>
        }
        text="Our bot is constantly online and on the lookout for the best deals. We source blogs, forums, Twitter and newsletters in addition to our own research. With years of experience, we know how to find cheap flights."
      />
      <StepContainer
        icon={notificationIcon}
        title={
          <span>
            get alarms &<br /> book your trip
          </span>
        }
        text="We will notify you once we have found a deal that fits for you. Get all the information you need and a link to the cheapest booking option within minutes of us discovering a deal. Never again miss out on a deal."
      />
    </div>
  );
};

export default StepsGrid;
