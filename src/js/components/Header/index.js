import React from 'react';
import { Link } from 'react-router';

import style from './style.less';

export default class Header extends React.Component {
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
          <Link to="/"><h1> Kustomer Banking Systems </h1></Link>
        </div>
      </div>
    );
  }
}
