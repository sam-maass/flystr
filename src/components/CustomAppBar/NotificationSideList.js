import { NotificationList } from './NotificationList';
import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { css } from 'emotion';
import { classes } from '../../styles';
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
  shouldComponentUpdate(nextProps) {
    const { _id: currentId } = this.props.notifications[0];
    const { _id: nextId } = nextProps.notifications[0];
    if (currentId !== nextId) return true;
    return false;
  }

  render() {
    const { notifications } = this.props;
    return (
      <div className={style}>
        <div className="title">Notifications</div>
        <div className="webpush">
          <span>Push Notifications:</span>
          <WebPushSwitch />
        </div>
        <Divider />
        <NotificationList notifications={notifications.slice(0, 5)} />
        <NotificationList notifications={notifications.slice(5, 10)} />
        <NotificationList notifications={notifications.slice(10, 15)} />
      </div>
    );
  }
}

NotificationSideList.propTypes = {
  notifications: PropTypes.array
};
