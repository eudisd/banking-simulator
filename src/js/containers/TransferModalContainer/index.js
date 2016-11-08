import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import filter from 'lodash/filter';

import style from './style.less';

import accountActionCreators from '../../actions/accountActionCreators';

class TransferModalContainer extends React.Component {
  static propTypes = {
    accounts: React.PropTypes.array,
    onSelectToAccount: React.PropTypes.func,
    onSelectFromAccount: React.PropTypes.func
  };

  static defaultProps = {
    accounts: [],
    onSelectToAccount() {},
    onSelectFromAccount() {}
  };

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.selectFromAccount = this.selectFromAccount.bind(this);
    this.selectToAccount = this.selectToAccount.bind(this);
  }

  componentWillMount() {
    style.use();

    $('.ui.dropdown').dropdown();
  }

  componentWillUnmount() {
    style.unuse();
  }

  toggleModal(e) {
    $(this.refs.modal).modal('show');
    $(this.refs.dropdownFrom).dropdown({
      onChange: this.selectFromAccount
    });
    $(this.refs.dropdownTo).dropdown({
      onChange: this.selectToAccount
    });
  }

  selectFromAccount(id) {
    this.props.onSelectFromAccount(id);
  }

  selectToAccount(id) {
    this.props.onSelectToAccount(id);
  }

  render() {
    const { accounts } = this.props;

    return (
      <span>
        &nbsp;
        &nbsp;
        <button onClick={this.toggleModal}
                className="ui blue basic button">Transfer Money</button>
        <div className="ui modal" ref="modal">
          <div className="header">
            Money Transfer Form
          </div>
          <div className="description ui grid">
            <div className="transferModal__description sixteen wide column">
              <select className="ui dropdown" ref="dropdownFrom">
                <option value="">From Account</option>
                {accounts.map((account) => {
                  console.log('a', account);
                  return (
                    <option value={account.id} key={account.id}>
                      {account.idName}
                    </option>
                  );
                })}
              </select>
              &nbsp;
              <i className="arrow right icon"></i>
              &nbsp;
              <select className="ui dropdown" ref="dropdownTo">
                <option value="">To Account</option>
                {accounts.map((account) => {
                  return (
                    <option value={account.id} key={account.id}>
                      {account.idName}
                    </option>
                  );
                })}
              </select>
              &nbsp;
              &nbsp;
              <span className="ui input focus">
                <input type="text" placeholder="Amount..." />
              </span>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="actions">
            <div className="ui black deny button">
              Cancel
            </div>
            <div className="ui positive right labeled icon button">
              Transfer
              <i className="checkmark icon"></i>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

function mapStateToProps(state) {
  const internal = state && state.accounts && filter(state.accounts.internal, a => a.id !== 'all');
  const external = state && state.accounts && state.accounts.external;
  const accounts = internal && external && internal.concat(external);
  return {
    accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectFromAccount: (id) => dispatch(),
    onSelectToAccount: (id) => dispatch()
  };
}

export { TransferModalContainer };
export default connect(mapStateToProps, mapDispatchToProps)(TransferModalContainer);
