import accountTypes from './accountTypes';
import baseApi from '../api/base';

baseApi.getAccountTransactions();

export default {
  setInternalAccount(id) {
    return {
      type: accountTypes.SET_SELECTED_INTERNAL_ACCOUNT,
      id
    };
  },

  setSelectedToAccount(id) {
    return {
      type: accountTypes.SET_SELECTED_TO_ACCOUNT,
      id
    };
  },

  setSelectedFromAccount(id) {
    return {
      type: accountTypes.SET_SELECTED_FROM_ACCOUNT,
      id
    };
  },

  setSelectedInternalAccount(id) {
    return {
      type: accountTypes.SET_SELECTED_INTERNAL_ACCOUNT,
      id
    };
  },

  getSelectedInternalAccount() {
    return {
      type: accountTypes.GET_SELECTED_INTERNAL_ACCOUNT
    };
  },

  getExternalAccounts() {
    return (dispatch) => {
      dispatch({ type: accountTypes.GET_EXTERNAL_ACCOUNTS });

      return baseApi.getExternalAccounts().then((response) => {
        dispatch({
          type: accountTypes.GET_EXTERNAL_ACCOUNTS_SUCCESS,
          response: response
        });
      });
    };
  },

  getInternalAccounts() {
    return (dispatch) => {
      dispatch({ type: accountTypes.GET_INTERNAL_ACCOUNTS });

      return baseApi.getInternalAccounts().then((response) => {
        dispatch({
          type: accountTypes.GET_INTERNAL_ACCOUNTS_SUCCESS,
          response: response
        });
      });
    };
  }
};
