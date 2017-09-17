import React, { Component } from 'react';
import { connect } from 'react-redux';

import asyncThunk from './actions';
import LoginForm from './LoginForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  submit = (values) => {
    // print the form values to the console
    this.props.asyncThunk();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(null, { asyncThunk })(App);
