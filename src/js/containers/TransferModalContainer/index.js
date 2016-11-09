import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import filter from 'lodash/filter';

import accountActionCreators from '../../actions/accountActionCreators';
import TransferModal from '../../components/TransferModal';

class TransferModalContainer extends React.Component {
  static propTypes = {
    selectedFromAccount: React.PropTypes.object,
    selectedToAccount: React.PropTypes.object,
    accounts: React.PropTypes.array,
    onSelectToAccount: React.PropTypes.func,
    onSelectFromAccount: React.PropTypes.func,
    onSetTransaction: React.PropTypes.func
  };

  static defaultProps = {
    selectedFromAccount: {},
    selectedToAccount: {},
    accounts: [],
    onSelectToAccount() {},
    onSelectFromAccount() {},
    onSetTransaction() {}
  };

  render() {
    return (
      <span>
        <TransferModal
          selectedFromAccount={this.props.selectedFromAccount}
          selectedToAccount={this.props.selectedToAccount}
          accounts={this.props.accounts}
          onSelectToAccount={this.props.onSelectToAccount}
          onSelectFromAccount={this.props.onSelectFromAccount}
          onSetTransaction={this.props.onSetTransaction} />
      </span>
    );
  }
}

function mapStateToProps(state) {
  const internal = state && state.accounts && state.accounts.internal;
  const external = state && state.accounts && state.accounts.external;
  const selectedFromAccount = state && state.accounts && state.accounts.selectedFromAccount;
  const selectedToAccount = state && state.accounts && state.accounts.selectedToAccount;
  const accounts = internal && external && internal.concat(external);

  return {
    selectedFromAccount,
    selectedToAccount,
    accounts
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    setSelectedFromAccount,
    setSelectedToAccount,
    setTransaction
  } = accountActionCreators;

  return {
    onSelectFromAccount: (id) => dispatch(setSelectedFromAccount(id)),
    onSelectToAccount: (id) => dispatch(setSelectedToAccount(id)),
    onSetTransaction: (fromId, toId, amount, desc) => {
      dispatch(setTransaction(
        fromId,
        toId,
        amount,
        desc
      ));
    }
  };
}

export { TransferModalContainer };
export default connect(mapStateToProps, mapDispatchToProps)(TransferModalContainer);
