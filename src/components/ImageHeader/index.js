import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import HugeHeadline from '../HugeHeadline';
import { classes, styles } from '../../styles';
import { Link } from 'react-router-dom';

const header = css`
  background-image: url('/landing.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
  padding: 10px;
  display: grid;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    'logo'
    'headline'
    'button';
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 150px 1fr 150px;
    height: 30vw;
    max-height: 33vh;
    grid-template-areas:
      'logo . .'
      '. headline .'
      '. button .';
  }
  .headline {
    grid-area: headline;
    justify-self: center;
    align-self: center;
  }
  .logo {
    grid-area: logo;
    width: 150px;
    height: 50px;
    margin: auto;
    background-image: url('/logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    @media only screen and (min-width: 1024px) {
      margin: 0;
      width: 300px;
    }
  }
  .buttonbox {
    grid-area: button;
    align-self: center;
    justify-self: center;
    padding: 32px;
    a {
      text-decoration: none;
    }
  }
  .button {
    border: 2px solid ${styles.colors.orange};
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    ${classes.typography.title};
    color: ${styles.colors.white};
    font-weight: bold;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const ImageHeader = () => {
  return (
    <div className={header}>
      <div className="logo" />
      <div className="headline">
        <HugeHeadline>
          select your destination
          <br />
          we find the best flights
        </HugeHeadline>
      </div>
      <div className="buttonbox">
        <Link to="/deals">
          <span className="button">Find cheap flights</span>
        </Link>
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  children: PropTypes.node
};

export default ImageHeader;
