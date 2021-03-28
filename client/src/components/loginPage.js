import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authenticationActions';

class LoginPage extends Component {
  onHandleLogin = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }
  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;

      if (isSuccess) {
        localStorage.removeItem('token');
        localStorage.setItem('token', this.props.response.login.response.token);
      }
    }
    return (
      <Router>
        <Route>
      <div>
        <h3>Login Page</h3>
        {!isSuccess ? <div>{message}</div> : createBrowserHistory.push('dashboard')}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label>Email</label>
            <input type='email' name='email' /> 
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' /> 
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to='register'>Register here</Link>
      </div>
      </Route>
      </Router>
    )
  }
};

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);