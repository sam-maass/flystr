import React, { Component } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    this.getUserProfile();
  }

  async getUserProfile() {
    if (window.localStorage) {
      const token = window.localStorage.getItem('currentJWT');
      if (token) {
        const {
          data: profile
        } = await axios.get('http://localhost:3000/user/profile', {
          params: { token }
        });
        this.setState({ profile });
      }
    }
  }

  onSuccess = async args => {
    window.localStorage.setItem('currentJWT', args.tokenObj.id_token);
    await axios.post('http://localhost:3000/user/login', {
      token: args.tokenObj.id_token
    });
    this.getUserProfile();
  };

  onFailure(...args) {
    console.log(args);
  }

  render() {
    const { profile } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
          clientId="1059931024943-1u64m1fh6glpodhalllbkbul1hbsdbfh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
        />
        <Profile {...profile} />
      </div>
    );
  }
}

export default App;
