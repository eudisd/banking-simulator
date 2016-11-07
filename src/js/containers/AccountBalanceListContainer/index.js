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

  static defaultProps = {
    savingsAccount: {},
    checkingAccount: {}
  };

  render() {
    console.log('this: ', this.props.savingsAccount);
    return (
      <AccountBalanceList savingsAccount={this.props.savingsAccount}
                          checkingAccount={this.props.checkingAccount} />
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    savingsAccount: state.accounts && state.accounts.internal && state.accounts.internal[1],
    checkingAccount: state.accounts && state.accounts.internal && state.accounts.internal[2]
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export { AccountBalanceListContainer };
export default connect(mapStateToProps, mapDispatchToProps)(AccountBalanceListContainer);
