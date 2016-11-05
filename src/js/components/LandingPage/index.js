import $ from 'jquery';

import React from 'react';
import { withRouter } from 'react-router';

import style from './style.less';
import Header from '../Header';

export default withRouter(class LandingPage extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  componentDidMount() {
    $(this.refs.modal).modal('show');
  }

  render() {
    return (
      <div className="landingPage ui large top fixed hidden menu row">
          <div className="landingPage__title trustfulBlue container left floated column">
            <h1>Kustomer Banking Systems</h1>
          </div>
          <div className="landingPage__loginButton right floated column">
            <button className="ui button">Login As Guest</button>
          </div>
      </div>
    );
  }
});
