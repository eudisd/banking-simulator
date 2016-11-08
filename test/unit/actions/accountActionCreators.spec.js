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
        const expectedResponse = getExpectedGetInternalAccountsResponse();

        expect(actions[0]).to.deep.equal({
          type: accountTypes.GET_INTERNAL_ACCOUNTS
        });

        expect(actions[1]).to.deep.equal(expectedResponse);
      });
    });
  });

  describe('setSelectedInternalAccount', () => {
    it('should create an action to set the selected internal account', () => {
      const { setSelectedInternalAccount } = accountActionCreators;
      const expectedResult = {
        type: accountTypes.SET_SELECTED_INTERNAL_ACCOUNT,
        id: '1234'
      };

      expect(setSelectedInternalAccount('1234')).to.deep.equal(expectedResult);
    });
  });

  describe('getSelectedInternalAccount', () => {
    it('should create an action to get the selected internal account', () => {
      const { getSelectedInternalAccount } = accountActionCreators;
      const expectedResult = {
        type: accountTypes.GET_SELECTED_INTERNAL_ACCOUNT
      };

      expect(getSelectedInternalAccount()).to.deep.equal(expectedResult);
    });
  });
});

function getExpectedGetInternalAccountsResponse() {

  return {
     "type":"GET_INTERNAL_ACCOUNTS_SUCCESS",
     "response":[
        {
           "id":"all",
           "transactions":[
              {
                 "id":2,
                 "amount":-100,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Merged 1",
                 "type":"debit",
                 "balance":4900
              },
              {
                 "id":3,
                 "amount":200,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Merged 2",
                 "type":"deposit",
                 "balance":5100
              }
           ],
           "name":"KBS",
           "idName":"All Transactions",
           "type":"all"
        },
        {
           "id":"789012",
           "transactions":[
              {
                 "id":4,
                 "amount":-100,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"debit",
                 "balance":4900
              },
              {
                 "id":5,
                 "amount":200,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"deposit",
                 "balance":5100
              },
              {
                 "id":6,
                 "amount":-100,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"debit",
                 "balance":4900
              },
              {
                 "id":7,
                 "amount":200,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"deposit",
                 "balance":5100
              },
              {
                 "id":8,
                 "amount":-100,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"debit",
                 "balance":4900
              },
              {
                 "id":9,
                 "amount":200,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"deposit",
                 "balance":5100
              },
              {
                 "id":10,
                 "amount":-100,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"debit",
                 "balance":4900
              },
              {
                 "id":11,
                 "amount":200,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 1",
                 "type":"deposit",
                 "balance":5100
              }
           ],
           "name":"KBS",
           "idName":"KBS-savings-...9012",
           "type":"savings",
           "balance":5000
        },
        {
           "id":"111213",
           "transactions":[
              {
                 "id":12,
                 "amount":-200,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 3",
                 "type":"debit",
                 "balance":4800
              },
              {
                 "id":13,
                 "amount":300,
                 "date":"1983-07-21T05:15:00.000Z",
                 "description":"Testing 4",
                 "type":"deposit",
                 "balance":5200
              }
           ],
           "name":"KBS",
           "idName":"KBS-checking-...1213",
           "type":"checking",
           "balance":1000
        }
     ]
  };
}
