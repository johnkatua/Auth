import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes/index';
import App from './container/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()} routes={routes} />
    <App />
  </Provider>,
  document.getElementById('root')
);

