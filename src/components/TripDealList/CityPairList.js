import { ExpandDealButton } from './ExpandDealButton';
import { LoginMoreButton } from './LoginMoreButton';
import React from 'react';
import DealPanel from '../DealPanel';
import { CityPairString } from './CityPairString';
import { css } from 'emotion';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ITEMS_WHEN_COLLAPSED = 4;

const style = css`
  .buttonRow {
    display: grid;
    align-items: center;
    justify-items: center;
    margin: 16px;
  }
  .button-content {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-gap: 8px;
    grid-template-columns: max-content max-content;
    &.extra-icon {
      grid-template-columns: max-content max-content max-content;
    }
  }
`;

export class InnerCityPairList extends React.Component {
  static propTypes = {
    pair: PropTypes.object,
    flights: PropTypes.array,
    isLoggedIn: PropTypes.bool
  };
  state = { isExpanded: false };

  handleExpandToggle = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { pair, flights, isLoggedIn } = this.props;
    const { isExpanded } = this.state;
    const itemsToShow = isExpanded ? flights.length : ITEMS_WHEN_COLLAPSED;
    const flightsAfterButton = flights.length - ITEMS_WHEN_COLLAPSED;
    return (
      <div className={style}>
        <CityPairString pair={pair} augmentedFlights={flights} />
        {flights.slice(0, itemsToShow).map((item, key) => (
          <DealPanel elevation={0} key={key} {...item} />
        ))}
        <div className="buttonRow">
          {flightsAfterButton > 0 && !isLoggedIn && (
            <LoginMoreButton flightsAfterButton={flightsAfterButton} />
          )}
          {flightsAfterButton > 0 && isLoggedIn && (
            <ExpandDealButton
              isExpanded={isExpanded}
              flightsAfterButton={flightsAfterButton}
              handleExpandToggle={this.handleExpandToggle}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoggedIn: Boolean(store.user._id)
  };
};

export const CityPairList = connect(mapStateToProps)(InnerCityPairList);
