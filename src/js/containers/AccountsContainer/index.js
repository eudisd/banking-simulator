import React from 'react';
import { connect } from 'react-redux';

import accountActionCreators from '../../actions/accountActionCreators';
import AccountBalanceListContainer from '../AccountBalanceListContainer';
import AccountTransactionListContainer from '../AccountTransactionListContainer';
import AccountDropdownListContainer from '../AccountDropdownListContainer';
import TransferModalContainer from '../TransferModalContainer';
import PaginationContainer from '../PaginationContainer';

class AccountsContainer extends React.Component {
  static propTypes = {
    onGetInternalAccounts: React.PropTeyps.func,
    onGetExternalAccounts: React.PropTeyps.func
  };

  static defaultProps = {
    onGetInternalAccounts() {},
    onGetExternalAccounts() {}
  };

  componentWillMount() {
    this.props.onGetInternalAccounts();
    this.props.onGetExternalAccounts();
  }

  render() {
    return (
      <div className="ui column container ui grid">
        <div className="accountLedger__header right floated nine wide column">
          <div className="ui top attached header">
            <AccountDropdownListContainer />
            <TransferModalContainer />
          </div>
          <AccountTransactionListContainer />
          <div className="ui bottom attached centered header">
            <PaginationContainer />
          </div>
        </div>
        <AccountBalanceListContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const {
    getInternalAccounts,
    getExternalAccounts
  } = accountActionCreators;

  return {
    onGetInternalAccounts: () => dispatch(getInternalAccounts()),
    onGetExternalAccounts: () => dispatch(getExternalAccounts())
  };
}

export default connect(null, mapDispatchToProps)(AccountsContainer);
