import React from 'react';
import { Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/NotificationsActiveOutlined';
import PropTypes from 'prop-types';

export function NotificationIconContainer({
  unseenNotifications,
  toggleDrawer
}) {
  return (
    <div onClick={toggleDrawer('right', true)}>
      <IconButton color="inherit">
        {unseenNotifications > 0 && (
          <Badge badgeContent={unseenNotifications} color="secondary">
            <NotificationsIcon />
          </Badge>
        )}
        {unseenNotifications === 0 && <NotificationsIcon />}
      </IconButton>
    </div>
  );
}

NotificationIconContainer.propTypes = {
  unseenNotifications: PropTypes.number,
  toggleDrawer: PropTypes.func
};
