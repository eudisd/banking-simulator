import React from 'react';
import { Router, Route, Redirect, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from '../components/App';
import RouteNotFound from '../components/RouteNotFound';
import LandingPage from '../components/LandingPage';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="*" component={RouteNotFound} />
    </Route>
  </Router>
);

export default routes;
