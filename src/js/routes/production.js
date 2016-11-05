import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import App from '../components/App';
import RouteNotFound from '../components/RouteNotFound';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/Dashboard';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={RouteNotFound} />
    </Route>
  </Router>
);

export default routes;
