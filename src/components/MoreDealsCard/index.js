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
    background-image: linear-gradient(
      to right top,
      #ff6d00,
      #ff8735,
      #ff9f5a,
      #ffb57e,
      #ffcaa3
    );
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
    width: 100%;
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

const MoreDealsCard = () => {
  return (
    <div className={style}>
      <Link to="/signup">
        <Card>
          <div className="card-content">
            <div className="backdrop">
              <div className="text">
                <span>Stay updated on new deals:</span>
                <h3>
                  <span className="dashed">
                    Signup and create your own trip alerts
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

export default MoreDealsCard;
