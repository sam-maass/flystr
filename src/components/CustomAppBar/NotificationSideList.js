import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DealsIcon from '@material-ui/icons/TrendingDown';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { css } from 'emotion';
import { styles, classes } from '../../styles';
import { WebPushSwitch } from '../WebPushSwitch/WebPushSwitch';

const style = css`
  max-width: 80vw;
  ${classes.typography.base};
  .title {
    font-size: 20px;
    padding: 8px 24px;
  }
  .webpush {
    padding: 0px 24px;
  }
`;

export class NotificationSideList extends React.Component {
  static propTypes = {
    notifications: PropTypes.array
  };

  shouldComponentUpdate(nextProps) {
    const { notifications: oldNotifications = [{}] } = this.props;
    const { notifications: nextNotifications = [{}] } = nextProps;
    return (nextNotifications[0] || {})._id !== (oldNotifications[0] || {})._id;
  }

  render() {
    const { notifications = [] } = this.props;
    return (
      <div className={style}>
        <div className="title">Notifications</div>
        <div className="webpush">
          <span>Push Notifications:</span>
          <WebPushSwitch />
        </div>
        <Divider />
        {notifications.map(notification => (
          <Link
            to={`/trip/${notification.payload.trip}`}
            key={notification._id}
          >
            <ListItem button>
              <ListItemIcon>
                <DealsIcon style={{ color: styles.colors.blue2 }} />
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
        ))}
      </div>
    );
  }
}
