import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div>
        {this.props.email && (
          <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{email}</li>
          </ul>
        )}
        {!this.props.email && <h2>Please login to see data</h2>}
      </div>
    );
  }
}

export default Profile;
