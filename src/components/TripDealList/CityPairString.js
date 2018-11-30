import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import PropTypes from 'prop-types';
import { TooltipNode } from './TooltipNode';
import { logEvent } from '../../utils/logEvent';

export const CityPairString = ({ pair, augmentedFlights = [] }) => {
  const [
    {
      outDestinationDetails = {},
      outOriginDetails = {},
      outOrigin,
      outDestination
    }
  ] = augmentedFlights.filter(f => f.cityPair === pair);
  return (
    <div className={style}>
      <div className="deskew">
        <Tooltip
          enterTouchDelay={50}
          title={<TooltipNode title={outOriginDetails} />}
          placement="top"
          onOpen={logEvent({
            type: 'hover',
            category: 'Deal | Airport Tooltip',
            label: outOrigin
          })}
        >
          <span>
            {outOriginDetails.city || outOrigin}{' '}
            {outOriginDetails.city && <small>({outOrigin})</small>}
          </span>
        </Tooltip>{' '}
        -{' '}
        <Tooltip
          enterTouchDelay={50}
          title={<TooltipNode title={outDestinationDetails} />}
          placement="top"
          onOpen={logEvent({
            type: 'hover',
            category: 'Deal | Airport Tooltip',
            label: outDestination
          })}
        >
          <span>
            {outDestinationDetails.city || outDestination}{' '}
            {outDestinationDetails.city && <small>({outDestination})</small>}
          </span>
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
  padding: 16px 0 8px 8px;
  ${classes.typography.base};
  line-height: 1.5;
  color: ${styles.colors.midGray};
  span {
    font-weight: bold;
    border-bottom: 1px dashed #ccc;
    small {
      color: ${styles.colors.lightGray};
      font-weight: normal;
    }
  }
`;

export default CityPairString;
