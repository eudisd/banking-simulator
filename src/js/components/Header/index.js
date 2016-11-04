import React from 'react';

import style from './style.less';

export default class Header extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
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
}
