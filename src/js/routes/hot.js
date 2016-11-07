import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';
import { Provider } from 'react-redux';

import RouteNotFound from '../components/RouteNotFound';
import { LandingPageTransition } from '../components/LandingPage';
import { DashboardTransition } from '../components/Dashboard';
import configureStore from '../store';
import DevTools from '../containers/DevTools';

const store = configureStore({});

const routes = (
  <Provider store={store}>
    <div>
      <Router history={hashHistory}>
        <Route path="/" component={LandingPageTransition} />
        <Route path="/dashboard" component={DashboardTransition} />
        <Route path="*" component={RouteNotFound} />
      </Router>
      <DevTools />
    </div>
  </Provider>
);

export default routes;
