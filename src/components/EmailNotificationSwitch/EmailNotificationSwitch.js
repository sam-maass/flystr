import React from 'react';
import { Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { updateUserSettings } from '../../actions/userActions';
import PropTypes from 'prop-types';

class InnerEmailNotificationSwitch extends React.Component {
  static propTypes = {
    isEmailActive: PropTypes.bool,
    updateUserSettings: PropTypes.func
  };

  handleChange = async e => {
    e.preventDefault();
    const { isEmailActive, updateUserSettings } = this.props;
    updateUserSettings({
      emailNotificationsActive: !isEmailActive
    });
  };

  render() {
    return (
      <Switch
        checked={this.props.isEmailActive}
        value="emailNotificationsActive"
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    isEmailActive:
      store.user.settings && store.user.settings.emailNotificationsActive
  };
};

export const EmailNotificationSwitch = connect(
  mapStateToProps,
  { updateUserSettings }
)(InnerEmailNotificationSwitch);
