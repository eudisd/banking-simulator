import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import accountActionCreators from '../../actions/accountActionCreators';

import AccountDropdownList from '../../components/AccountDropdownList';

class AccountDropdownListContainer extends React.Component {
  static propTypes = {
    accounts: React.PropTypes.array,
    onGetInternalAccounts: React.PropTeyps.func
  };

  static defaultProps = {
    accounts: [],
    onGetInternalAccounts() {}
  };

  componentWillMount() {
    this.props.onGetInternalAccounts();
  }

  render() {
    return (
      <AccountDropdownList accounts={this.props.accounts} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts.internal
  };
}

function mapDispatchToProps(dispatch) {
  const { getInternalAccounts } = accountActionCreators;

  return {
    onGetInternalAccounts: () => dispatch(getInternalAccounts())
  };
}

export { AccountDropdownListContainer };
export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdownListContainer);
