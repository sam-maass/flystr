import React from 'react';
import DealPanel from '../DealPanel';
import InfoPanel from './InfoPanel';
import { CityPairString } from './CityPairString';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { css } from 'emotion';

const ITEMS_WHEN_COLLAPSED = 4;

const style = css`
  .buttonRow {
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .button-content {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 24px;
  }
`;

export class CityPairList extends React.Component {
  state = { isExpanded: false };

  handleExpandToggle = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { showInfoPanel, pair, flights } = this.props;
    const { isExpanded } = this.state;
    const itemsToShow = isExpanded ? flights.lenght : ITEMS_WHEN_COLLAPSED;
    const flightsAfterButton = flights.length - ITEMS_WHEN_COLLAPSED;
    return (
      <div className={style}>
        <CityPairString pair={pair} augmentedFlights={flights} />
        {flights.slice(0, itemsToShow).map((item, key) => (
          <DealPanel elevation={0} key={key} {...item} />
        ))}
        {showInfoPanel && <InfoPanel />}
        <div className="buttonRow">
          {flightsAfterButton > 0 && (
            <Button
              onClick={this.handleExpandToggle}
              variant="outlined"
              color="primary"
              size="small"
            >
              {!isExpanded && (
                <span className="button-content">
                  Show {flightsAfterButton} more{' '}
                  <ExpandMoreIcon>more</ExpandMoreIcon>
                </span>
              )}
              {isExpanded && (
                <span className="button-content">
                  Show less <ExpandLessIcon>less</ExpandLessIcon>
                </span>
              )}
            </Button>
          )}
        </div>
      </div>
    );
  }
}
