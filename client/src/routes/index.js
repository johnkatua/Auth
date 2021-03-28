import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../container/App';
import RegisterPage from '../components/registerPage';
import LoginPage from '../components/loginPage';

export default function index() {
  return (
    <Switch>
      <Route path='/' component={App}>
      <Route path='/login' component={LoginPage} />
      <Route path='/register' component={RegisterPage} />
      </Route>
  </Switch>
  )
};


