import accountTypes from './accountTypes';
import baseApi from '../api/base';

baseApi.getAccountTransactions();

export default {
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
