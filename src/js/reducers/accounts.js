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

  case accountTypes.GET_SELECTED_INTERNAL_ACCOUNT:
    return state.selectedInternalAccount;

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

  default:
    return state;
  }
};
