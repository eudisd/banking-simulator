import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import App from '../components/App';
import RouteNotFound from '../components/RouteNotFound';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/Dashboard';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={RouteNotFound} />
    </Route>
  </Router>
);

export default routes;
