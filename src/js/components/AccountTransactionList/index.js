import $ from 'jquery';
import classnames from 'classnames';
import truncate from 'lodash/truncate';
import React from 'react';
import { Link, withRouter } from 'react-router';

import style from './style.less';

const numberFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

class AccountTransactionList extends React.Component {
  static propTypes = {
    transactions: React.PropTypes.array
  };

  static defaultProps = {
    transactions: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  renderTransactions() {
    let html;

    const { transactions } = this.props;

    if (transactions.length > 0) {
      html = (
        <table className="transactions__table ui blue table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              const classNames = classnames('rowAmount', {
                'transactions__debit--red': transaction.type === 'debit',
                'transactions__deposit--green': transaction.type === 'deposit'
              });
              return (
                <tr className="transactions__row--small" key={transaction.id}>
                  <td>{(new Date(transaction.date)).toUTCString()}</td>
                  <td className="rowDesc">{transaction.description}</td>
                  <td className={classNames}>{numberFormatter.format(transaction.amount)}</td>
                  <td>{transaction.type}</td>
                  <td>{numberFormatter.format(transaction.balance)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      html = <h3 className="ui transactions__default"> - No Transactions To Show -</h3>;
    }

    return html;
  }

  render() {
    const { transactions } = this.props;

    return (
      <div className="transactions ui attached segment">
        {this.renderTransactions()}
      </div>
    );
  }
}

export default AccountTransactionList;
