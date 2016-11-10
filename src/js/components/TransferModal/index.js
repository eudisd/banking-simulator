import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import filter from 'lodash/filter';

import style from './style.less';

class TransferModal extends React.Component {
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

    this.state = {
      appendErrorDiv: false
    };

    this.configureModal = this.configureModal.bind(this);
    this.selectFromAccount = this.selectFromAccount.bind(this);
    this.selectToAccount = this.selectToAccount.bind(this);
    this.clearFromAccount = this.clearFromAccount.bind(this);
    this.clearToAccount = this.clearToAccount.bind(this);
    this.clearAmount = this.clearAmount.bind(this);
    this.clearMemo = this.clearMemo.bind(this);
    this.validateModal = this.validateModal.bind(this);
    this.toggleAppeldErrorDiv = this.toggleAppendErrorDiv.bind(this);
    this.onModalHidden = this.onModalHidden.bind(this);
    this.onModalShow = this.onModalShow.bind(this);
    this.onModalApprove = this.onModalApprove.bind(this);
  }

  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  configureModal() {
    $(this.refs.modal).modal({
      onHidden: this.onModalHidden,
      onShow: this.onModalShow,
      onApprove: this.onModalApprove
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

  onModalHidden() {
    this.clearFromAccount();
    this.clearToAccount();
    this.clearAmount();
    this.clearMemo();
    this.props.onSelectFromAccount();
    this.props.onSelectToAccount();
    $(this.refs.form).form({ fields: {} });
    $(this.refs.form).form('validate form');
    $(this.refs.form).find('.error').removeClass('error');
    this.toggleAppendErrorDiv();
  }

  onModalShow() {
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

    this.toggleAppendErrorDiv();

    setTimeout(() => {
      $(this.refs.dropdownFrom).dropdown('refresh');
      $(this.refs.dropdownTo).dropdown('refresh');
      $(this.refs.dropdownFrom).dropdown('set selected', this.props.accounts[0].id);
      $(this.refs.dropdownTo).dropdown('set selected', this.props.accounts[1].id);
      this.props.onSelectFromAccount(this.props.accounts[0].id);
      this.props.onSelectToAccount(this.props.accounts[1].id);
    });
  }

  onModalApprove() {
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

  clearFromAccount() {
    this.props.onSelectFromAccount();
  }

  clearToAccount() {
    this.props.onSelectToAccount();
  }

  clearAmount() {
    this.refs.amount.value = '';
  }

  clearMemo() {
    this.refs.desc.value = '';
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

  toggleAppendErrorDiv() {
    this.setState({
      appendErroDiv: !this.state.appendErrorDiv
    });
  }

  renderFromModal() {
    const { accounts } = this.props;

    return (
      <select className="dropdownFrom ui dropdown" ref="dropdownFrom" name="dropdownFrom">
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
      <select className="dropdownTo ui dropdown" ref="dropdownTo" name="dropdownTo">
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
                <input className="amount" name="amount" type="text" placeholder="Amount..." ref="amount" />
              </span>

              &nbsp;

              <span className="ui input focus field">
                <input className="desc" name="desc" type="text" placeholder="Memo..." ref="desc" />
              </span>
            </div>

            {this.state.appendErrorDiv ?
              <div className="sixteen wide column">
                <div className="ui grid four wide column centered">
                  <div className="transferModal__error ui error message"></div>
                </div>
              </div>
            : null}
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

export default TransferModal;
