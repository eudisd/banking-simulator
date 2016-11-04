import React from 'react';

import style from './style.less';

export default class Footer extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnount() {
    style.unuse();
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__copy">
          <a href="#" target="_blank"></a>
        </div>
      </div>
    );
  }
}
