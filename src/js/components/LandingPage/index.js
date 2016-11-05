import 'gsap';

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
      <div className="landingPage row">
        <div className="two wide column">
        </div>

        <div className="two wide column">
        </div>
      </div>
    );
  }
});
