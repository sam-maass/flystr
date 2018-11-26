import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { classes } from '../../styles';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import { connect } from 'react-redux';
import { updateUserSettings } from '../../actions/userActions';

const style = css`
  ${classes.typography.base}
  background-color:#ffebee;
  border: 1px solid #b71c1c;
  border-radius: 4px;
  padding: 8px;
  grid-column-end: -1;
  grid-column-start: 1;
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-gap: 8px;
`;

const EmailNotificationsHint = ({
  emailNotificationsActive,
  updateUserSettings
}) => {
  const enableNotifications = () =>
    updateUserSettings({ emailNotificationsActive: true });
  if (emailNotificationsActive) return null;
  return (
    <div className={style}>
      <InfoIcon style={{ color: '#b71c1c' }} />{' '}
      <span>
        You have not activated notifications yet.{' '}
        <button className="link" onClick={enableNotifications}>
          Activate Email Notifications
        </button>{' '}
        to get price updates when flights in your watchlist get cheaper.{' '}
      </span>
    </div>
  );
};

EmailNotificationsHint.propTypes = {
  emailNotificationsActive: PropTypes.bool,
  updateUserSettings: PropTypes.func
};

const mapStateToProps = store => {
  return {
    emailNotificationsActive: Boolean(
      (store.user.settings || {}).emailNotificationsActive
    )
  };
};

export default connect(
  mapStateToProps,
  { updateUserSettings }
)(EmailNotificationsHint);
