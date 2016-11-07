import { expect } from 'chai';
import map from 'lodash/map';
import model from 'js/models/falcor';
import accountTypes from 'js/actions/accountTypes';
import accountActionCreators from 'js/actions/accountActionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('accountActionCreators', () => {
  describe('getInternalAccounts', () => {
    it('get internal accounts correctly', () => {
      const { getInternalAccounts } = accountActionCreators;
      const initialState = {};
      const store = mockStore(initialState);

      return store.dispatch(getInternalAccounts()).then(() => {
        const actions = store.getActions();

        return model.get('accounts.internal[0..2]["id", "name", "idName", "type", "balance", "transactions"]').then((response) => {
          const newResponse = map(response.json.accounts.internal, (o) => o);

          expect(actions[0]).to.deep.equal({
            type: accountTypes.GET_INTERNAL_ACCOUNTS
          });

          expect(actions[1]).to.deep.equal({
            type: accountTypes.GET_INTERNAL_ACCOUNTS_SUCCESS,
            response: newResponse
          });
        });
      });
    });
  });
});
