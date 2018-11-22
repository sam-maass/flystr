import React from 'react';
import { Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { updateUserSettings } from '../../actions/userActions';
import PropTypes from 'prop-types';
import { getActiveSubscription, requestSubscription } from './webPushHelpers';

class InnerWebPushSwitch extends React.Component {
  static propTypes = {
    isPushActive: PropTypes.bool,
    updateUserSettings: PropTypes.func
  };

  handleChange = async () => {
    const { isPushActive, updateUserSettings } = this.props;
    let pushSubscription;
    if (!isPushActive) {
      pushSubscription =
        (await getActiveSubscription()) || (await requestSubscription());
      if (!pushSubscription) return;
    }
    updateUserSettings({
      pushSubscription,
      pushNotificationsActive: !isPushActive
    });
  };

  render() {
    return (
      <Switch
        checked={this.props.isPushActive}
        value="webPushActive"
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    isPushActive:
      store.user.settings && store.user.settings.pushNotificationsActive
  };
};

export const WebPushSwitch = connect(
  mapStateToProps,
  { updateUserSettings }
)(InnerWebPushSwitch);
