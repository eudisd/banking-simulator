import $ from 'jquery';
import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';

import style from './style.less';
import Header from '../Header';
import Footer from '../Footer';

class Dashboard extends React.Component {
  componentWillAppear(callback) {
    $(this.refs.dashboard)
      .transition({
        animation  : 'fade in',
        duration   : '300ms',
        onComplete : function() {
          callback();
        }
      });
  }

  componentDidAppear() {
  }

  componentWillEnter(callback) {
    callback();
  }

  componentDidEnter() {
  }

  render() {
    return (
      <div className="app row ui grid" ref="dashboard">
        <div className="sixteen wide column">
          <div className="dashboard">
            <div className="dashboard__header inverted ui large top fixed hidden menu row">
                <div className="dashboard__title container left floated">
                  <Header />
                </div>
                <div className="dashboard__userInfo right floated column">
                  <i className="user icon"></i>
                  <span>Welcome, <span className="dashboard__guest">Guest</span>!</span>
                </div>
            </div>
            <div className="dashboard__content ui row">
              <div className="ui column container">HI</div>
            </div>
          </div>
        </div>
        <div className="sixteen wide column">
          <Footer />
        </div>
      </div>
    );
  }
}

class DashboardTransition extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  render() {
    return (
      <ReactTransitionGroup>
        <Dashboard router={this.props.router} />
      </ReactTransitionGroup>
    );
  }
}

export { Dashboard };
export { DashboardTransition };
export default withRouter(Dashboard);
