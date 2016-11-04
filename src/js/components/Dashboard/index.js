import 'gsap';
import React from 'react';
import { withRouter } from 'react-router';

import style from './style.less';

export default withRouter(class Dashboard extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  componentDidMount() {
    setTimeout(() => {
    }, 200);
  }

  render() {
    return (
      <div className="dashboard">
        Dashboard
      </div>
    );
  }
});
