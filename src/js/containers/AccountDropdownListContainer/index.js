import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

import AccountDropdownList from '../../components/AccountDropdownList';
import accountActionCreators from '../../actions/accountActionCreators';

class AccountDropdownListContainer extends React.Component {
  static propTypes = {
    accounts: React.PropTypes.array,
    onSetSelectedInternalAccount: React.PropTypes.func
  };

  static defaultProps = {
    accounts: []
  };

  render() {
    return (
      <AccountDropdownList accounts={this.props.accounts} onSetSelectedInternalAccount={this.props.onSetSelectedInternalAccount} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts.internal
  };
}

function mapDispatchToProps(dispatch) {
  const { setSelectedInternalAccount } = accountActionCreators;

  return {
    onSetSelectedInternalAccount: (id) => dispatch(setSelectedInternalAccount(id))
  };
}

export { AccountDropdownListContainer };
export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdownListContainer);
