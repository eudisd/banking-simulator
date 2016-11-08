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

  render() {
    const { transactions } = this.props;

    return (
      <div className="transactions ui attached segment">
        <table className="ui blue table">
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
              const classNames = classnames({
                'transactions__debit--red': transaction.type === 'debit',
                'transactions__deposit--green': transaction.type === 'deposit'
              });
              return (
                <tr className="transactions__row--small" key={transaction.id}>
                  <td>{(new Date(transaction.date)).toUTCString()}</td>
                  <td>{transaction.description}</td>
                  <td className={classNames}>{numberFormatter.format(transaction.amount)}</td>
                  <td>{transaction.type}</td>
                  <td>{numberFormatter.format(transaction.balance)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>

          </tfoot>
        </table>
      </div>
    );
  }
}

export default AccountTransactionList;
