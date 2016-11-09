import accountTypes from './accountTypes';
import baseApi from '../api/base';

export default {
  setTransaction(fromId, toId, amount, desc) {
    return (dispatch) => {
      dispatch({
        type: accountTypes.SET_TRANSACTION
      });

      return baseApi.setTransaction(fromId, toId, amount, desc).then((response) => {
        dispatch({
          type: accountTypes.SET_TRANSACTION_SUCCESS,
          response: response
        });

        dispatch({
          type: accountTypes.UPDATE_SELECTED_INTERNAL_ACCOUNT
        });
      });
    };
  },

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

  getSelectedToAccount() {
    return {
      type: accountTypes.GET_SELECTED_TO_ACCOUNT
    };
  },

  getSelectedFromAccount() {
    return {
      type: accountTypes.GET_SELECTED_FROM_ACCOUNT
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
