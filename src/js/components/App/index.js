import React from 'react';
import { withRouter } from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

import baseStyle from "../../../less/base.less";
import style from './style.less';

export default withRouter(class App extends React.Component {

  componentWillMount() {
    style.use();
    baseStyle.use();
  }

  componentWillUnmount() {
    style.unuse();
    baseStyle.unuse();
  }

  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
})
