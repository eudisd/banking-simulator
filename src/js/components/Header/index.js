import React from 'react';
import { withRouter } from 'react-router';

import style from './style.less';

export default withRouter(class Header extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="header">
        <div className="header__copy">
          <h1 className="trustful-blue"> Kustomer Banking Systems </h1>
        </div>
      </div>
    );
  }
});
