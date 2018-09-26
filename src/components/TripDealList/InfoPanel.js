import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import { Link } from 'react-router-dom';
const style = css`
  a{
  text-decoration: none;
  }
  .container {
    background-color: #fff;
    ${classes.typography.base};
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 8px;
    .row {
      padding: 8px;
      display: grid;
      justify-self:baseline;
    }
    .header {
      color: ${styles.colors.lightGray};
      font-size: 14px;
      display: grid;
      align-items: center;
      margin: 2px;
      justify-self: baseline;
}
    }
    .price {
      color: ${styles.colors.orange};
      text-align: center;
      background: rgba(255, 109, 0, 0.05);
      height: 100%;
      width: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      .link {
        color: ${styles.colors.lightGray};
        font-size: 0.8em;
      }
    }
  }
`;
const InfoPanel = () => {
  return (
    <div className={style}>
      <Link to="/trip">
        <div className="container">
          <div className="row">
            <div className="header">
              <b>
                Personalized dates
                <br />
              </b>
              for signed up users
            </div>
          </div>
          <div className="row price">
            FREE
            <div className="link">Sign up</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

InfoPanel.propTypes = {
  outOrigin: PropTypes.string,
  outOriginDetails: PropTypes.object,
  inOriginDetails: PropTypes.object,
  inOrigin: PropTypes.string,
  outDestination: PropTypes.string,
  inDestination: PropTypes.string,
  outDate: PropTypes.string,
  inDate: PropTypes.string,
  price: PropTypes.string,
  link: PropTypes.string,
  linkSource: PropTypes.string,
  currency: PropTypes.string
};

export default InfoPanel;
