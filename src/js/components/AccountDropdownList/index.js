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
    // https://github.com/Semantic-Org/Semantic-UI/issues/2247
    // Seems like there is a bug when updating dynamically generated dropdown,
    // we must wrap it in a setTimeout to actually get the desired affect.
    setTimeout(() => {
     // $(this.refs.dropdown).dropdown('set selected', 'all');
      $(this.refs.dropdown).dropdown('set selected', '111213');
      this.props.onSetSelectedInternalAccount('111213');
    });
  }

  onChange(id) {
    this.props.onSetSelectedInternalAccount(id);
  }

  render() {
    return (
      <select className="ui dropdown" ref="dropdown">
        {this.props.accounts.map((account) => {
          return (
            <option value={account.id} key={account.id}>
              {account.idName}
            </option>
          );
        })}
      </select>
    );
  }
}

export default AccountDropdownList;
