import React from 'react';
import { withRouter } from 'react-router';

import style from './style.less';
import Header from '../Header';

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
        <div className="dashboard__header inverted ui large top fixed hidden menu row">
            <div className="dashboard__title container left floated">
              <h1 className="kbs-white">Kustomer Banking Systems</h1>
            </div>
            <div className="dashboard__userInfo right floated column">
              <i className="user icon"></i>
              <span>Welcome, Guest!</span>
            </div>
        </div>
      </div>
    );
  }
});
