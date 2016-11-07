import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import { Provider } from 'react-redux';

import RouteNotFound from '../components/RouteNotFound';
import { LandingPageTransition } from '../components/LandingPage';
import { DashboardTransition } from '../components/Dashboard';
import configureStore from '../store';

const store = configureStore({});

const routes = (
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPageTransition} />
        <Route path="/dashboard" component={DashboardTransition} />
        <Route path="*" component={RouteNotFound} />
      </Router>
    </div>
  </Provider>
);

export default routes;
