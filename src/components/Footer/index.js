import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { classes, styles } from '../../styles';

const containerStyle = css`
  background: #eaeaea;
  padding-bottom: 16px;
  padding-top: 32px;
  .grid {
    margin: auto;
    max-width: 1024px;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr;
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    * {
      ${classes.typography.base};
      font-size: 0.9rem;
    }
    a {
      text-decoration: none;
      color: ${styles.colors.midGray};
      &:hover {
        color: ${styles.colors.darkGray};
      }
    }
    b {
      border-bottom: 1px solid ${styles.colors.midGray};
      font-weight: bold;
      color: ${styles.colors.darkGray};
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 8px 4px;
    }
    .social {
      grid-column-start: 1;
    }
    .about {
      grid-column-start: 1;
    }
    .origins {
      grid-column: span 1;
      width: 100%;
      @media only screen and (min-width: 1024px) {
        grid-column: 2 / span 2;
        grid-row: 1 / span 2;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr;
        @media only screen and (min-width: 1024px) {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
    .copyright {
      grid-column: 1 / -1;
      justify-self: center;
      color: ${styles.colors.lightGray};
    }
  }
`;

const Footer = ({ regions = [] }) => (
  <div className={containerStyle}>
    <div className="grid">
      <div className="about">
        <b>About Tripfixed</b>
        <ul>
          <li>
            <Link to="/about">What we do</Link>
          </li>
          <li>
            <Link to="/legal">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="social">
        <b>On Social Media</b>
        <ul>
          <li>
            <a href="https://twitter.com/tripfixed">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/tripfixed/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/tripfixedcom/">Facebook</a>
          </li>
        </ul>
      </div>
      <div className="origins">
        <Link to="/deals">
          <b>Find Cheap Flights</b>
        </Link>
        <ul>
          {regions.map(region => (
            <li key={region}>
              <Link to={`/deals/from-${region.replace(' ', '-')}`}>
                Deals from {region}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="copyright"> &copy; Tripfixed, 2018</div>
    </div>
  </div>
);

Footer.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.string)
};
export default Footer;
