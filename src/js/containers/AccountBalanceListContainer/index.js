import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

import accountActionCreators from '../../actions/accountActionCreators';
import AccountBalanceList from '../../components/AccountBalanceList';

class AccountBalanceListContainer extends React.Component {
  static propTypes = {
    savingsAccount: React.PropTypes.object,
    checkingAccount: React.PropTypes.object
  };

  render() {
    return (
      <AccountBalanceList savingsAccount={this.props.savingsAccount}
                          checkingAccount={this.props.checkingAccount} />
    );
  }
}

function mapStateToProps(state) {
  const internal = state.accounts && state.accounts.internal && state.accounts.internal;

  let savingsAccount = internal && internal[1];
  let checkingAccount = internal && internal[2];

  savingsAccount = isEmpty(savingsAccount) ? undefined: savingsAccount;
  checkingAccount = isEmpty(checkingAccount) ? undefined: checkingAccount;

  return {
    savingsAccount,
    checkingAccount
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export { AccountBalanceListContainer };
export default connect(mapStateToProps, mapDispatchToProps)(AccountBalanceListContainer);
