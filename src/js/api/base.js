import map from 'lodash/map';
import forEach from 'lodash/forEach';
import filter from 'lodash/filter';
import merge from 'lodash/merge';
import model from 'js/models/falcor';

export default {
  getInternalAccounts() {
    return new Promise((resolve, reject) => {
      return model.get('accounts.internal[0..2]["id", "name", "idName", "type", "balance", "transactions"]').then((accountsResponse) => {
        this.getAccountTransactions().then((transactionResponse) => {
          let accountsUpdated = accountsResponse.json.accounts.internal;

          accountsUpdated = map(accountsUpdated, (a) => {
            let merged;

            forEach(transactionResponse, (t) => {
              if (t.id === a.id) {
                merged = merge(t, a);
                return false;
              }
              return true;
            });

            return merged;
          });

          accountsUpdated.forEach((a) => {
            a.transactions = map(a.transactions, (value, index, col) => {
              return value;
            });
          });

          resolve(accountsUpdated);
        });
      });
    });
  },

  getAccountTransactions(id='', offset=0, limit=10) {
    return new Promise((resolve, reject) => {
      return model.get(`accounts.internal[0..2]["id", "transactions"][${offset}..${limit}]["id", "amount", "date", "description", "type", "balance"]`).then((response) => {
        let transactions;

        try {
          if (id === '') {
            transactions = map(response.json.accounts.internal, o => o);
          } else {
            transactions = filter(response.json.accounts.internal, o => o.id === id);
          }
          resolve(transactions);
        } catch (e) {
          reject({ error: 'Error' });
        }
      });
    });
  },

  getInternalAccountsField(field) {
    return new Promise((resolve, reject) => {
      return model.get(`accounts.internal[0..1]["${field}"]`).then((response) => {
        if (response) {
          resolve(map(response.json.accounts.internal, (o) => o));
        } else {
          reject({error: 'Field Not Found'});
        }
      });
    });
  },

  getExternalAccounts() {
    return new Promise((resolve, reject) => {
      return model.get('accounts.external[0]["id", "name", "type", "balance"]').then((response) => {
        resolve(map(response.json.accounts.external, (o) => o));
      });
    });
  }
};
