import $ from 'jquery';
import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';

import style from './style.less';
import Header from '../Header';
import Footer from '../Footer';

const numberFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

class AccountBalanceList extends React.Component {
  static propTypes = {
    checkingAccount: React.PropTypes.object,
    savingsAccount: React.PropTypes.object
  };

  static defaultProps = {
    checkingAccount: { balance: 0 },
    savingsAccount: { balance: 0 }
  };

  render() {
    return (
      <div className="accountBalance right floated six wide column">
        <div className="ui top attached header">
          Balances
        </div>
        <div className="ui attached segment">
          <p>Checking Account: {numberFormatter.format(this.props.checkingAccount.balance)}</p>
          <p>Savings Account: {numberFormatter.format(this.props.savingsAccount.balance)}</p>
          <p>Total: {numberFormatter.format(this.props.checkingAccount.balance + this.props.savingsAccount.balance)}</p>
        </div>
      </div>
    );
  }
}

export default AccountBalanceList;
