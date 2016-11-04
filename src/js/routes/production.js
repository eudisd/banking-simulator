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

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="*" component={RouteNotFound} />
    </Route>
  </Router>
);

export default routes;
