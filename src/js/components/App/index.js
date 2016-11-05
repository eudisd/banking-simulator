import React from 'react';
import { withRouter } from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

import baseStyle from '../../../less/base.less';
import style from './style.less';

export default withRouter(class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  static defaultProps = {
    children: {}
  };

  componentWillMount() {
    baseStyle.use();
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
    baseStyle.unuse();
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
