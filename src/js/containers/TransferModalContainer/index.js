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

    this.configureModal = this.configureModal.bind(this);
    this.selectFromAccount = this.selectFromAccount.bind(this);
    this.selectToAccount = this.selectToAccount.bind(this);

    this.clearFromAccount = this.clearFromAccount.bind(this);
    this.clearToAccount = this.clearToAccount.bind(this);
    this.clearAmount = this.clearAmount.bind(this);
    this.validateModal = this.validateModal.bind(this);
  }

  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  configureModal() {
    $(this.refs.modal).modal({
      closable: false,
      onHidden: () => {
       this.clearFromAccount();
       this.clearToAccount();
       this.clearAmount();
      },
      onShow: () => {
        console.log($(this.refs.form));
        $(this.refs.form).form({
          on: 'blur',
          fields: {
            amount: {
              identifier: 'amount',
              rules: [
                {
                  type: 'integer',
                  prompt: 'Please enter valid dollar amount'
                }
              ]
            }
          }
        });
      },
      onApprove: (e) => {
        return this.validateModal();
      }
    });

    $(this.refs.modal).modal('show');

    $(this.refs.dropdownFrom).dropdown({
      onChange: this.selectFromAccount,
      allowReselection: true
    });

    $(this.refs.dropdownTo).dropdown({
      onChange: this.selectToAccount,
      allowReselection: true
    });
  }

  clearFromAccount() {
    this.props.onSelectFromAccount();
  }

  clearToAccount() {
    this.props.onSelectToAccount();
  }

  clearAmount() {
    this.refs.amount.value = '';
  }

  selectFromAccount(id) {
    this.props.onSelectFromAccount(id);
  }

  selectToAccount(id) {
    this.props.onSelectToAccount(id);
  }

  validateModal() {
    return $(this.refs.form).form('validate form');
  }

  render() {
    const { accounts } = this.props;

    return (
      <span>
        &nbsp;
        &nbsp;
        <button onClick={this.configureModal}
                className="ui blue basic button">Transfer Money</button>
        <div className="ui modal" ref="modal">
          <div className="header">
            Money Transfer Form
          </div>

          <div className="description ui grid form" ref="form">

            <div className="transferModal__description sixteen wide column">
              <select className="ui dropdown" ref="dropdownFrom">
                <option value="">From Account</option>
                {accounts.map((account) => {
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
              <span className="ui input focus field">
                <input name="amount" type="text" placeholder="Amount..." ref="amount" />
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
  const selectedFromAccount = state && state.accounts && state.accounts.selectedFromAccount;
  const selectedToAccount = state && state.accounts && state.accounts.selectedToAccount;

  let accounts = internal && external && internal.concat(external);

  if (selectedFromAccount) {
    accounts = filter(accounts, a => a.id !== selectedFromAccount.id);
  }

  if (selectedToAccount) {
    accounts = filter(accounts, a => a.id !== selectedToAccount.id);
  }

  return {
    accounts
  };
}

function mapDispatchToProps(dispatch) {
  const {
    setSelectedFromAccount,
    setSelectedToAccount
  } = accountActionCreators;

  return {
    onSelectFromAccount: (id) => dispatch(setSelectedFromAccount(id)),
    onSelectToAccount: (id) => dispatch(setSelectedToAccount(id))
  };
}

export { TransferModalContainer };
export default connect(mapStateToProps, mapDispatchToProps)(TransferModalContainer);
