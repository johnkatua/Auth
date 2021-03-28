import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../src/App.css';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';

class App extends Component {
  render() {
    return (
      <div>
        <h3>User Authentication System</h3>
        <LoginPage />
        <RegisterPage />
        {this.props.children}
      </div>
    )
  }
};

App.protoTypes = {
  children: PropTypes.object.isRequired
};

export default App;