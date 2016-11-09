import filter from 'lodash/filter';
import accountTypes from '../actions/accountTypes';

export default (state={}, action) => {
  switch(action.type) {
  case accountTypes.SET_SELECTED_INTERNAL_ACCOUNT:
    let selectedInternalAccount;
    try {
      selectedInternalAccount = filter(state.internal, a => a.id === action.id)[0];
    } catch (e) {
      selectedInternalAccount = state.internal[0];
    }

    return {
      ...state,
      selectedInternalAccount
    };

  case accountTypes.SET_SELECTED_TO_ACCOUNT:
    let selectedToAccount;

    try {
      selectedToAccount = filter(state.internal, a => a.id === action.id)[0];
      if (selectedToAccount === undefined) {
        selectedToAccount = filter(state.external, a => a.id === action.id)[0];
      }
    } catch (e) {
      selectedToAccount = state.internal[0];
    }

    return {
      ...state,
      selectedToAccount
    };

  case accountTypes.SET_SELECTED_FROM_ACCOUNT:
    let selectedFromAccount;

    try {
      selectedFromAccount = filter(state.internal, a => a.id === action.id)[0];
      if (selectedFromAccount === undefined) {
        selectedFromAccount = filter(state.external, a => a.id === action.id)[0];
      }
    } catch (e) {
      selectedFromAccount = state.internal[0];
    }

    return {
      ...state,
      selectedFromAccount
    };

  case accountTypes.UPDATE_SELECTED_INTERNAL_ACCOUNT:
    let updatedSelectedInternalAccount;

    if (state && state.selectedInternalAccount) {
      updatedSelectedInternalAccount = filter(state.internal, a => a.id === state.selectedInternalAccount.id)[0];
    }

    console.log('state');

    return {
      ...state,
      selectedInternalAccount: updatedSelectedInternalAccount
    };

  case accountTypes.GET_SELECTED_INTERNAL_ACCOUNT:
    return state.selectedInternalAccount;

  case accountTypes.GET_SELECTED_TO_ACCOUNT:
    return state.selectedToAccount;

  case accountTypes.GET_SELECTED_FROM_ACCOUNT:
    return state.selectedFromAccount;

  case accountTypes.GET_INTERNAL_ACCOUNTS_SUCCESS:
    return {
      ...state,
      internal: action.response
    };

  case accountTypes.GET_EXTERNAL_ACCOUNTS_SUCCESS:
    return {
      ...state,
      external: action.response
    };

  case accountTypes.SET_TRANSACTION_SUCCESS:
    return {
      ...state,
      internal: action.response[0],
      external: action.response[1]
    };

  default:
    return state;
  }
};
