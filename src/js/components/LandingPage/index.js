import React from 'react';
import { withRouter } from 'react-router';

import style from './style.less';

export default withRouter(class LandingPage extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <div className="landingPage">
        Click to Begin
      </div>
    );
  }
});
