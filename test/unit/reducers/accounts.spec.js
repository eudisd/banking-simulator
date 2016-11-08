import { expect } from 'chai';
import accounts from 'js/reducers/accounts';
import accountTypes from 'js/actions/accountTypes';

describe('accounts reducer', () => {
  it('returns the default state when action is not recognized', () => {
    expect(accounts({}, 'UNKNOWN_ACTION')).to.deep.equal({});
  });

  it('returns internal accounts on GET_INTERNAL_ACCOUNTS_SUCCESS', () => {
    expect(accounts({}, {
      type: accountTypes.GET_INTERNAL_ACCOUNTS_SUCCESS,
      response: 'My Test State'
    })).to.deep.equal({ internal: 'My Test State' });
  });

  it('sets the first internal account on SET_SELECTED_INTERNAL_ACCOUNT error', () => {
    expect(accounts({
    }, {
      type: accountTypes.SET_SELECTED_INTERNAL_ACCOUNT,
      id: 2
    })).to.deep.equal({
      selectedInternalAccount: undefined
    })
  });

  it('sets the selected internal account on SET_SELECTED_INTERNAL_ACCOUNT', () => {
    expect(accounts({
      internal: [{id: 1}]
    }, {
      type: accountTypes.SET_SELECTED_INTERNAL_ACCOUNT,
      id: 1
    })).to.deep.equal({
      internal: [{id: 1}],
      selectedInternalAccount: {id: 1}
    })
  });

  it('returns the selected internal account on GET_SELECTED_INTERNAL_ACCOUNT', () => {
    expect(
    accounts({
      selectedInternalAccount: {id: 1}
    }, {
      type: accountTypes.GET_SELECTED_INTERNAL_ACCOUNT,
    })).to.deep.equal({
      id: 1
    });
  });
});
