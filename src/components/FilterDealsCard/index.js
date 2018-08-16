import React from 'react';
import { css } from 'emotion';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { styles, classes } from '../../styles';

const style = css`
  width: 100%;
  max-width: 400px;
  a {
    text-decoration: none;
  }
  .card-content {
    background-image: linear-gradient(to right top, #48c6ef, #6f86d6);
  }
  .backdrop {
    height: 200px;
    width: 100%;
    display: grid;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  }
  .text {
    margin: 24px 8px;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    ${classes.typography.title};
    color: ${styles.colors.white};
  }
  h3 {
    width: 90%;
    .dashed {
      font-weight: bold;
      padding: 4px;
      line-height: 2;
      border-bottom: 3px dashed ${styles.colors.white};
    }
  }
`;

const FilterDealsCard = () => {
  return (
    <div className={style}>
      <Link to="/trips">
        <Card>
          <div className="card-content">
            <div className="backdrop">
              <div className="text">
                <span>Looking for other destinations?</span>
                <h3>
                  <span className="dashed">
                    1. Set up your dream trip <br />
                    2. We find the best deal
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default FilterDealsCard;
