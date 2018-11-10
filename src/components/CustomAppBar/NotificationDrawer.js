import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { NotificationSideList } from './NotificationSideList';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsActiveOutlined';
import { connect } from 'react-redux';
import {
  fetchNotifications,
  markNotificationsAsSeen
} from '../../actions/userActions';

let myInterval;

class NotificationDrawer extends React.Component {
  componentDidMount() {
    this.props.fetchNotifications();
    myInterval = setInterval(() => this.props.fetchNotifications(), 1000 * 5);
  }
  componentWillUnmount() {
    clearInterval(myInterval);
  }

  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
    this.props.markNotificationsAsSeen();
  };

  shouldComponentUpdate(nextProps, nextState) {
    const notificationsChanged =
      (this.props.notifications[0] || {})._id !==
      (nextProps.notifications[0] || {})._id;

    if (this.state.right !== nextState.right) return true;
    if (notificationsChanged) return true;
    return false;
  }

  render() {
    const { notifications = [] } = this.props;
    const unseenNotifications = notifications.filter(n => !n.seenByUser);

    return (
      <div>
        <IconButton color="inherit">
          {unseenNotifications.length > 0 && (
            <Badge
              badgeContent={unseenNotifications.length}
              color="secondary"
              onClick={this.toggleDrawer('right', true)}
            >
              <NotificationsIcon />
            </Badge>
          )}
          {unseenNotifications.length === 0 && (
            <NotificationsIcon onClick={this.toggleDrawer('right', true)} />
          )}
        </IconButton>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <NotificationSideList notifications={notifications} />
          </div>
        </Drawer>
      </div>
    );
  }
}

NotificationDrawer.propTypes = {
  notifications: PropTypes.array,
  fetchNotifications: PropTypes.func,
  markNotificationsAsSeen: PropTypes.func
};

const mapStateToProps = store => {
  return {
    notifications: store.notifications
  };
};

export const StyledNotificationDrawer = connect(
  mapStateToProps,
  { fetchNotifications, markNotificationsAsSeen }
)(NotificationDrawer);
