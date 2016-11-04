import 'gsap';

import $ from 'jquery';
import 'semantic/dist/semantic';

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
    $(this.refs.dropdown).dropdown('refresh');
  }

  render() {
    return (
      <div className="ui fluid multiple search selection dropdown" ref="dropdown">
          <input type="hidden" name="repo-ids" />
          <div className="default text">Select Repos</div>
          <i className="dropdown icon"></i>
          <div className="menu">
          </div>
      </div>
    );
  }
});
