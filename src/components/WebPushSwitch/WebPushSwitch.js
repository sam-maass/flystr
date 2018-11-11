import React from 'react';
import { Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { updateUserSettings } from '../../actions/userActions';
import PropTypes from 'prop-types';
import { getActiveSubscription, requestSubscription } from './webPushHelpers';

function InnerWebPushSwitch({ userSettings = {}, updateUserSettings }) {
  const handleChange = async () => {
    let pushSubscription;
    if (!active) {
      pushSubscription =
        (await getActiveSubscription()) || (await requestSubscription());
      if (!pushSubscription) return;
    }
    updateUserSettings({
      pushSubscription,
      pushNotificationsActive: !active
    });
  };

  const active = Boolean(userSettings.pushNotificationsActive);
  return (
    <Switch checked={active} value="webPushActive" onChange={handleChange} />
  );
}

InnerWebPushSwitch.propTypes = {
  userSettings: PropTypes.object,
  updateUserSettings: PropTypes.func
};

const mapStateToProps = store => {
  return {
    userSettings: store.user.settings
  };
};

export const WebPushSwitch = connect(
  mapStateToProps,
  { updateUserSettings }
)(InnerWebPushSwitch);
