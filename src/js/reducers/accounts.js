import accountTypes from '../actions/accountTypes';

export default (state={}, action) => {
  switch(action.type) {
  case accountTypes.GET_INTERNAL_ACCOUNTS_SUCCESS:
    return {
      ...state,
      internal: action.response
    };

  default:
    return state;
  }
};
