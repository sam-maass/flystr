import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DealsIcon from '@material-ui/icons/TrendingDown';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { styles } from '../../styles';
import PropTypes from 'prop-types';
import moment from 'moment';

export function NotificationList({ notifications = [] }) {
  return <Fragment>{renderListItem(notifications)}</Fragment>;
}

NotificationList.propTypes = {
  notifications: PropTypes.array
};

function renderListItem(notifications) {
  return notifications.map(notification => (
    <Link to={`/trip/${notification.payload.trip}`} key={notification._id}>
      <ListItem button>
        <ListItemIcon>
          <DealsIcon
            style={{
              color: styles.colors.blue2
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={`Your ${notification.payload.name} trip is now ${
            notification.payload.newPrice
          } EUR`}
          secondary={moment(notification.createdAt).fromNow()}
        />
      </ListItem>
      <Divider />
    </Link>
  ));
}
