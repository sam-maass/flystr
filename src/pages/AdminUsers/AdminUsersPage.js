import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserOverview } from 'actions/adminActions';
import { css } from 'emotion';
import { classes, styles } from 'styles';
import moment from 'moment';

const style = css`
  padding: 32px 16px;
  display: grid;
  grid-gap: 64px 32px;
  justify-items: center;
  align-items: center;
  text-align: center;
  ${classes.typography.base}
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  .user-list {
    text-align: left;
    display: grid;
    grid-gap: 8px;
    max-width: 100%;
    overflow-x: scroll;
    grid-template-columns: repeat(5, 1fr);
    > div {
      background: #eee;
    }
    @media only screen and (min-width: 1024px) {
      grid-column: span 3;
    }
  }
  .key {
    ${classes.typography.title}
  }
  .value {
    color: ${styles.colors.green3};
    font-weight: bold;
    font-size: 2em;
    line-height: 1.6;
  }
  .list-head {
    font-weight: bold;
  }
`;

class AdminUsers extends React.PureComponent {
  componentDidMount() {
    this.props.fetchUserOverview();
  }

  render() {
    const { totalUsers, monthlyActiveUsers, newUsers, userList } = this.props;
    return (
      <div className={style}>
        <div className="total-users">
          <div className="value"> {totalUsers}</div>
          <div className="key">Total Users</div>
        </div>
        <div className="mau">
          <div className="value"> {monthlyActiveUsers}</div>
          <div className="key">Monthly active users</div>
        </div>
        <div className="new-users">
          <div className="value">{newUsers}</div>
          <div className="key">New Users (last 24hrs)</div>
        </div>
        <div className="user-list">
          <div className="list-head">Email</div>
          <div className="list-head">Sign Up</div>
          <div className="list-head">Last Seen</div>
          <div className="list-head">Account</div>
          <div className="list-head">Trips</div>
          {userList.map(user => (
            <>
              <div className="email">{user.email}</div>
              <div className="creation">
                {moment(user.createdAt).format('DD.MM.YYYY hh:mm')}
              </div>
              <div className="lastSeen">{moment(user.updatedAt).fromNow()}</div>
              <div className="account-type">
                {user.stripeSubscription ? 'premium' : 'free'}
              </div>
              <div className="trips">
                {user.tripCount > 0 && user.tripCount}
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}
AdminUsers.propTypes = {
  totalUsers: PropTypes.number,
  monthlyActiveUsers: PropTypes.number,
  newUsers: PropTypes.number,
  userList: PropTypes.array,
  fetchUserOverview: PropTypes.func
};

const mapStateToProps = store => {
  return {
    ...store.userOverview
  };
};

export default connect(
  mapStateToProps,
  { fetchUserOverview }
)(AdminUsers);
