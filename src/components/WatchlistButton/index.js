import React from 'react';
import HeartIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { css } from 'emotion';
import { classes } from '../../styles';
import { connect } from 'react-redux';
import { openGlobalModal } from '../../actions/modalActions';
import { createTripFromDeal } from '../../actions/tripActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const style = css`
  cursor: pointer;
  ${classes.typography.base};
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 7px 8px;
  transition: all 0.3s;
  justify-items: center;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :focus {
    outline: none;
  }
  .button-content {
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-gap: 8px;
  }
`;

let clicked = false;

export class InnerWatchlistButton extends React.PureComponent {
  state = { clicked: false };
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (!this.props.isLoggedIn) {
      this.props.openGlobalModal('signup');
      clicked = true;
    } else {
      this.setState({ clicked: true });
    }
  };

  render() {
    if ((clicked || this.state.clicked) && this.props.isLoggedIn) {
      this.props.createTripFromDeal(this.props.dealId);
      clicked = false;
      return <Redirect to="/trips" />;
    }
    return (
      <button className={style} onClick={this.handleClick}>
        <div className="button-content">
          <HeartIcon />
          <span>Add to Watchlist</span>
        </div>
      </button>
    );
  }
}

InnerWatchlistButton.propTypes = {
  openGlobalModal: PropTypes.func,
  createTripFromDeal: PropTypes.func,
  dealId: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = store => {
  return {
    isLoggedIn: Boolean(store.user._id)
  };
};

export const WatchlistButton = connect(
  mapStateToProps,
  { openGlobalModal, createTripFromDeal }
)(InnerWatchlistButton);
