import React from 'react';
import { withRouter } from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

import style from './style.less';

export default withRouter(class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  static defaultProps = {
    children: {}
  };

  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  render() {
    return (
      <div className="app row ui grid">
        <div className="sixteen wide column">
          {this.props.children}
        </div>
        <div className="sixteen wide column">
          <Footer />
        </div>
      </div>
    );
  }
});
