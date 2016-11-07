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
});
