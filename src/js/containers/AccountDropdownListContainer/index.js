import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

import AccountDropdownList from '../../components/AccountDropdownList';

class AccountDropdownListContainer extends React.Component {
  static propTypes = {
    accounts: React.PropTypes.array
  };

  static defaultProps = {
    accounts: []
  };

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

export { AccountDropdownListContainer };
export default connect(mapStateToProps, null)(AccountDropdownListContainer);
