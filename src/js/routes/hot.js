import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import RouteNotFound from '../components/RouteNotFound';
import { LandingPageTransition } from '../components/LandingPage';
import { DashboardTransition } from '../components/Dashboard';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={LandingPageTransition} />
    <Route path="/dashboard" component={DashboardTransition} />
    <Route path="*" component={RouteNotFound} />
  </Router>
);

export default routes;
