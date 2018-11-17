import { AccountTypeSetting } from './../components/Profile/AccountTypeSetting';
import { SettingDescription } from './../components/Profile/SettingDescription';
import React from 'react';
import { css } from 'emotion';
import { classes } from '../styles';
import { WebPushSwitch } from '../components/WebPushSwitch/WebPushSwitch';

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
const ProfilePage = () => {
  return (
    <div className={style}>
      <SettingDescription
        primary="Accounttype"
        secondary="Choose your account type"
      />
      <div>
        <AccountTypeSetting />
      </div>
      <SettingDescription primary="Push Notifications" />
      <div>
        <WebPushSwitch />
      </div>
    </div>
  );
};

export default ProfilePage;
