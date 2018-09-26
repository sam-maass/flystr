import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import PropTypes from 'prop-types';
import { TooltipNode } from './TooltipNode';

export const CityPairString = ({ pair, augmentedFlights = [] }) => {
  const [
    { outDestinationDetails, outOriginDetails, outOrigin, outDestination }
  ] = augmentedFlights.filter(f => f.cityPair === pair);
  return (
    <div className={style}>
      <div className="deskew">
        <Tooltip
          enterTouchDelay={50}
          title={<TooltipNode title={outOriginDetails} />}
          placement="top"
        >
          <span>{outOriginDetails.city || outOrigin}</span>
        </Tooltip>{' '}
        -{' '}
        <Tooltip
          enterTouchDelay={50}
          title={<TooltipNode title={outDestinationDetails} />}
          placement="top"
        >
          <span>{outDestinationDetails.city || outDestination}</span>
        </Tooltip>
      </div>
    </div>
  );
};

CityPairString.propTypes = {
  pair: PropTypes.string,
  augmentedFlights: PropTypes.array
};

const style = css`
  margin: 8px 16px;
  padding-bottom: 5px;
  ${classes.typography.base};
  line-height: 1.5;
  padding-left: 16px;
  background: ${styles.colors.blue3};
  color: ${styles.colors.white};
  transform: skew(-20deg); /* SKEW */
  .deskew {
    transform: skew(20deg); /* SKEW */
  }
  span {
    border-bottom: 2px dashed rgba(255, 255, 255, 0.4);
  }
`;

export default CityPairString;
