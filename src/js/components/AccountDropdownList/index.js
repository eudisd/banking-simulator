import $ from 'jquery';
import truncate from 'lodash/truncate';
import React from 'react';
import { Link, withRouter } from 'react-router';

import style from './style.less';
import AccountBalanceList from '../AccountBalanceList';

class AccountDropdownList extends React.Component {
  static propTypes = {
    accounts: React.PropTypes.array,
    onSetSelectedInternalAccount: React.PropTypes.func
  };

  static defaultProps = {
    accounts: [],
    onSetSelectedInternalAccount() {}
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    $(this.refs.dropdown).dropdown({
      onChange: this.onChange
    });
  }

  componentDidUpdate() {
  }

  onChange(id) {
    this.props.onSetSelectedInternalAccount(id);
  }

  render() {
    return (
      <select id="selectedInternalAccount" className="selectedInternalAccount ui dropdown" ref="dropdown">
        <option value="">Select Account</option>
        {this.props.accounts.map((account) => {
          return (
            <option className={`c-${account.id}`} value={account.id} key={account.id}>
              {account.idName}
            </option>
          );
        })}
      </select>
    );
  }
}

export default AccountDropdownList;
