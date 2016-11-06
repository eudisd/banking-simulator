import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import RouteNotFound from '../components/RouteNotFound';
import { LandingPageTransition } from '../components/LandingPage';
import Dashboard from '../components/Dashboard';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPageTransition} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={RouteNotFound} />
  </Router>
);

export default routes;
