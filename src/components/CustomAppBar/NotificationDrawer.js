import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { NotificationSideList } from './NotificationSideList';
import { connect } from 'react-redux';
import {
  fetchNotifications,
  markNotificationsAsSeen
} from '../../actions/userActions';
import { NotificationIconContainer } from './NotificationIconContainer';

let myInterval;

class NotificationDrawer extends React.Component {
  static propTypes = {
    notifications: PropTypes.array,
    fetchNotifications: PropTypes.func,
    markNotificationsAsSeen: PropTypes.func
  };

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
        <NotificationIconContainer
          unseenNotifications={unseenNotifications.length}
          toggleDrawer={this.toggleDrawer}
        />
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

const mapStateToProps = store => {
  return {
    notifications: store.notifications
  };
};
export const StyledNotificationDrawer = connect(
  mapStateToProps,
  { fetchNotifications, markNotificationsAsSeen }
)(NotificationDrawer);
