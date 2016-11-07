import $ from 'jquery';
import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';

import style from './style.less';
import Header from '../Header';
import Footer from '../Footer';

class AccountBalanceList extends React.Component {
  render() {
    return (
      <div className="accountBalance right floated five wide column">
        <div className="ui top attached header">
          Balances
        </div>
        <div className="ui attached segment">
          <p>Checking Account: $12,345</p>
          <p>Savings Account: $100</p>
          <p>Total: $12,445</p>
        </div>
      </div>
    );
  }
}

export default AccountBalanceList;
