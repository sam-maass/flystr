import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Profile from './Profile';
import HeaderContainer from './components/Header';
import { fetchUser, loginUser } from './actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile() {
    if (window.localStorage) {
      const token = window.localStorage.getItem('currentJWT');
      if (token) {
        this.props.fetchUser(token);
      }
    }
  }

  onSuccess = async args => {
    window.localStorage.setItem('currentJWT', args.tokenObj.id_token);
    this.props.loginUser(args.tokenObj.id_token);
  };

  onFailure() {}

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
          clientId="1059931024943-1u64m1fh6glpodhalllbkbul1hbsdbfh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
        />
        <Profile {...this.props.user} />
      </div>
    );
  }
}

AppContainer.propTypes = {
  fetchUser: PropTypes.func,
  user: PropTypes.object,
  loginUser: PropTypes.func
};

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const App = connect(mapStateToProps, { loginUser, fetchUser })(AppContainer);

export default App;
