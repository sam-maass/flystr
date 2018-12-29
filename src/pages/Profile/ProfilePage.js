import { AccountTypeSetting } from '../../components/Profile/AccountTypeSetting';
import { SettingDescription } from '../../components/Profile/SettingDescription';
import React from 'react';
import { css } from 'emotion';
import { classes } from '../../styles';
import { WebPushSwitch } from '../../components/WebPushSwitch/WebPushSwitch';
import PropTypes from 'prop-types';
import { EmailNotificationSwitch } from '../../components/EmailNotificationSwitch/EmailNotificationSwitch';
const style = css`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 16px;
  display: grid;
  grid-template-columns: 30fr 70fr;
  grid-gap: 48px;
  ${classes.typography.base};
`;
const ProfilePage = ({ hash }) => {
  let openPremiumDialog = false;
  if (hash === '#premium') {
    openPremiumDialog = true;
  }

  return (
    <div className={style}>
      <SettingDescription
        primary="Accounttype"
        secondary="Choose your account type"
      />
      <div>
        <AccountTypeSetting openPremiumDialog={openPremiumDialog} />
      </div>
      <SettingDescription primary="Notifications" />
      <div>
        <div className="notification-settings">
          <WebPushSwitch /> via Push <br />
          <EmailNotificationSwitch /> via Email
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  hash: PropTypes.string
};

export default ProfilePage;
