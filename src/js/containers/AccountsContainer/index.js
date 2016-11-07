import React from 'react';
import { connect } from 'react-redux';

import accountActionCreators from '../../actions/accountActionCreators';
import AccountBalanceListContainer from '../AccountBalanceListContainer';
import AccountTransactionListContainer from '../AccountTransactionListContainer';
import AccountDropdownListContainer from '../AccountDropdownListContainer';

class AccountsContainer extends React.Component {
  static propTypes = {
    onGetInternalAccounts: React.PropTeyps.func
  };

  static defaultProps = {
    onGetInternalAccounts() {}
  };

  componentWillMount() {
    this.props.onGetInternalAccounts();
  }

  render() {
    return (
      <div className="ui column container ui grid">
        <div className="accountLedger__header right floated nine wide column">
          <AccountDropdownListContainer />
          <AccountTransactionListContainer />
        </div>
        <AccountBalanceListContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const { getInternalAccounts } = accountActionCreators;

  return {
    onGetInternalAccounts: () => dispatch(getInternalAccounts())
  };
}

export default connect(null, mapDispatchToProps)(AccountsContainer);
