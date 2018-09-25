import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SideMenu from './layout/SideMenu'
import Login from './login/Login'

import { LoginUtil } from './login/LoginUtils'

const loginUtil = new LoginUtil()

const LoginComponent = () => (
  <div>
    <Login />
  </div>
);

const AppComponent = () => (
  <div className="App">
    <div className="App-intro">
      <SideMenu />
    </div>
  </div>
);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }


  render() {
    if (loginUtil.isUserLoggedIn()) {
      return (<AppComponent />)
    }
    return (<LoginComponent />)
  }
}

export default App;
