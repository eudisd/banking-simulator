import $ from 'jquery';
import React from 'react';
import { Link, withRouter } from 'react-router';

import style from './style.less';

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
    checkingAccount: { balance: 0, id: '' },
    savingsAccount: { balance: 0, id: '' }
  };

  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  render() {
    const {
      savingsAccount,
      checkingAccount
    } = this.props;

    return (
      <div className="accountBalance right floated six wide column">
        <div className="ui top attached header">
          Balances
        </div>
        <div className="ui attached segment">
          <p className="accountBalance__checking">
            Checking Account ({checkingAccount.id.split('').slice(-4).join('')}) : &nbsp;
            <span className="accountBalance__money--formatter">
              {numberFormatter.format(checkingAccount.balance)}
            </span>
          </p>
          <p className="accountBalance__savings">
            Savings Account ({savingsAccount.id.split('').slice(-4).join('')}) : &nbsp;
            <span className="accountBalance__money--formatter">
              {numberFormatter.format(savingsAccount.balance)}
            </span>
          </p>
          <p className="accountBalance__total">
            Total : &nbsp;
            <span className="accountBalance__money--formatter">
              {numberFormatter.format(checkingAccount.balance + savingsAccount.balance)}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default AccountBalanceList;
