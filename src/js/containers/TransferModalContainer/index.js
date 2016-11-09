import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import filter from 'lodash/filter';

import style from './style.less';

import accountActionCreators from '../../actions/accountActionCreators';
import baseApi from '../../api/base';

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
       $(this.refs.dropdownFrom).dropdown('restore defaults');
       $(this.refs.dropdownTo).dropdown('restore defaults');
      },
      onShow: () => {
        $(this.refs.form).form({
          on: 'blur',
          fields: {
            amount: {
              identifier: 'amount',
              rules: [
                {
                  type: 'regExp[/^[0-9]+$/]',
                  prompt: 'Please Enter Positive Dollar Amount'
                }
              ]
            },

            dropdownTo: {
              identifier: 'dropdownTo',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please Select To Account'
                }
              ]
            },

            dropdownFrom: {
              identifier: 'dropdownFrom',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please Select From Account'
                }
              ]
            }
          }
        });
      },
      onApprove: (e) => {
        const isValid = this.validateModal();

        if (isValid) {
          this.props.onSetTransaction(
            this.props.selectedFromAccount.id,
            this.props.selectedToAccount.id,
            this.refs.amount.value,
            this.refs.desc.value || ''
          );
        }

        return isValid;
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

  renderFromModal() {
    const { accounts } = this.props;

    return (
      <select className="ui dropdown" ref="dropdownFrom" name="dropdownFrom">
        {accounts.map((account) => {
          return (
            <option value={account.id} key={account.id}>
              {account.idName}
            </option>
          );
        })}
      </select>
    );
  }

  renderToModal() {
    const { accounts } = this.props;

    return (
      <select className="ui dropdown" ref="dropdownTo" name="dropdownTo">
        {accounts.map((account) => {
          return (
            <option value={account.id} key={account.id}>
              {account.idName}
            </option>
          );
        })}
      </select>
    );
  }

  render() {
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
              {this.renderFromModal()}

              &nbsp;
              <i className="arrow right icon"></i>
              &nbsp;

              {this.renderToModal()}

              &nbsp;

              <span className="ui input focus field">
                <input name="amount" type="text" placeholder="Amount..." ref="amount" />
              </span>

              &nbsp;

              <span className="ui input focus field">
                <input name="desc" type="text" placeholder="Memo..." ref="desc" />
              </span>
            </div>

            <div className="sixteen wide column">
              <div className="ui grid four wide column centered">
                <div className="transferModal__error ui error message"></div>
              </div>
            </div>
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
  const internal = state && state.accounts && state.accounts.internal;
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
