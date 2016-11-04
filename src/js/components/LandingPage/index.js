import 'gsap';
import React from 'react';
import ReactDOM from 'react-dom';
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

    const headerNode = ReactDOM.findDOMNode(this);
  }

  render() {

    return (
      <div className="landingPage">
        <Header ref="header" />
      </div>
    );
  }
});
