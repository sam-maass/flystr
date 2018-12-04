import React from 'react';
import { css } from 'emotion';
import Card from '@material-ui/core/Card';
import { styles, classes } from '../../styles';
import { logClick } from '../../utils/logClick';
import { ModalLink } from '../ModalLink';

const style = css`
  width: 100%;
  max-width: 400px;
  a {
    text-decoration: none;
  }
  border-radius: 4px;
  transition: all 0.15s;

  :hover {
    filter: brightness(1.15);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.32), 0 2px 2px 0 rgba(0, 0, 0, 0.16),
      0 0 0 1px rgba(0, 0, 0, 0.08);
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
    margin: 8px;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    ${classes.typography.title};
    color: ${styles.colors.white};
  }
  h3 {
    width: 90%;
    line-height: 0;
    .dashed {
      font-weight: bold;
      padding: 4px;
      border-bottom: 2px dashed ${styles.colors.white};
    }
  }
`;

const PayLessCard = () => {
  return (
    <div className={style}>
      <ModalLink
        modal="signup"
        onClick={logClick('/trips', { category: 'Deals | Pay Less Card' })}
      >
        <Card>
          <div className="card-content">
            <div className="backdrop">
              <div className="text">
                <span>Never miss a cheap flight</span>
                <img src="/best-price-card.svg" alt="Pricing" />
                <h3>
                  <span className="dashed">Pay up to 67% less</span>
                </h3>
              </div>
            </div>
          </div>
        </Card>
      </ModalLink>
    </div>
  );
};

export { PayLessCard };
