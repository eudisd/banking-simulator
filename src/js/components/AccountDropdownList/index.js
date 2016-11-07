import $ from 'jquery';
import truncate from 'lodash/truncate';
import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';

import style from './style.less';
import Header from '../Header';
import Footer from '../Footer';
import AccountBalanceList from '../AccountBalanceList';

class AccountDropdownList extends React.Component {
  static propTypes = {
    accounts: React.PropTypes.array
  };

  static defaultProps = {
    accounts: []
  }

  componentDidMount() {
    $(this.refs.dropdown).dropdown();
  }

  componentDidUpdate() {
    // https://github.com/Semantic-Org/Semantic-UI/issues/2247
    // Seems like there is a bug when updating dynamically generated dropdown,
    // we must wrap it in a setTimeout to actually get the desired affect.
    setTimeout(() => {
      $(this.refs.dropdown).dropdown('set selected', 'all');
    });
  }

  render() {
    return (
      <div className="ui top attached header">
        <select className="ui dropdown" ref="dropdown">
          {this.props.accounts.map((account) => {
            return (
              <option value={account.id} key={account.id}>
                {account.idName}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default AccountDropdownList;
