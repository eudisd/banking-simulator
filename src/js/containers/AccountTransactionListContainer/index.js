import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

import AccountTransactionList from '../../components/AccountTransactionList';
import accountActionCreators from '../../actions/accountActionCreators';

class AccountTransactionListContainer extends React.Component {
  static propTypes = {
    transactions: React.PropTypes.array
  };

  render() {
    return (
      <AccountTransactionList transactions={this.props.transactions} />
    );
  }
}

function mapStateToProps(state) {
  const { selectedInternalAccount } = state.accounts;
  const transactions = selectedInternalAccount && selectedInternalAccount.transactions;
  return {
    transactions
  };
}

export { AccountTransactionListContainer };
export default connect(mapStateToProps, null)(AccountTransactionListContainer);
