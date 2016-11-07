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
              <tr><th colSpan="3">
                <div className="ui right floated pagination menu">
                  <a className="icon item">
                    <i className="left chevron icon"></i>
                  </a>
                  <a className="item">1</a>
                  <a className="item">2</a>
                  <a className="item">3</a>
                  <a className="item">4</a>
                  <a className="icon item">
                    <i className="right chevron icon"></i>
                  </a>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default AccountTransactionList;
