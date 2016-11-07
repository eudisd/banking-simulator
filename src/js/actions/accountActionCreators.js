import accountTypes from './accountTypes';
import baseApi from '../api/base';

export default {
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
