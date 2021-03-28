import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { registerUserAction } from '../actions/authenticationActions';

class RegisterPage extends Component {
  onHandleRegistration = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    const data = {
      name, email, password
    };
    console.log(data);
    this.props.dispatch(registerUserAction(data));

  }
  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }
    
    return (
      <Router>
        <Route>
        <div>
        <h3>Register Page</h3>
        {!isSuccess ? <div>{message}</div> : createBrowserHistory.push('login')}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label>Name</label>
            <input type='text' name='name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
      </Route>
      </Router>
    )
  }
};

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps) (RegisterPage);