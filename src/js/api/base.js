import map from 'lodash/map';
import forEach from 'lodash/forEach';
import filter from 'lodash/filter';
import merge from 'lodash/merge';
import model from 'js/models/falcor';

export default {
  setTransaction(fromId, toId, amount) {
    return new Promise((resolve, reject) => {
      let payload = {
        json: {
          accounts: {
            external: null,
            internal: null
          }
        }
      };

      Promise.all([
        this.getInternalAccounts(),
        this.getExternalAccounts()
      ]).then((responses) => {
        const internal = responses[0];
        const external = responses[1];
        const numberAmount = Number(amount);

        if (!internal || !external) {
          return;
        }

        forEach(internal, (i) => {
          if (i.id === fromId) {
            i.transactions.push({
              id: i.id + Math.floor(Math.random() * 10000),
              balance: i.balance - numberAmount,
              amount: -numberAmount,
              type: 'debit',
              date: (new Date()).toJSON()
            });

            i.balance = i.balance - numberAmount;
            return false;
          }
          return true;
        });

        forEach(internal, (i) => {
          if (i.id === toId) {
            i.transactions.push({
              id: i.id + Math.floor(Math.random() * 10000),
              balance: i.balance + numberAmount,
              amount: numberAmount,
              type: 'deposit',
              date: (new Date()).toJSON()
            });

            i.balance = i.balance + numberAmount;
            return false;
          }
          return true;
        });

        if (external[0].id === fromId) {
          external[0].balance -= numberAmount;
        } else if (external[0].id === toId) {
          external[0].balance += numberAmount;
        }

        payload.json.accounts.external = external;
        payload.json.accounts.internal = internal;

        model.set(payload).then((response) => {
          return Promise.all([
            this.getInternalAccounts(),
            this.getExternalAccounts()
          ]).then((final) => {
            resolve(final);
          });
        });
      });
    });
  },

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
      return model
      .get(`accounts.internal[0..2]["id", "transactions"][${offset}..${limit}]["id", "amount", "date", "description", "type", "balance"]`)
      .then((response) => {
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
      return model
      .get(`accounts.internal[0..2]["${field}"]`)
      .then((response) => {
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
      return model
      .get('accounts.external[0]["id", "name", "idName", "type", "balance"]')
      .then((response) => {
        resolve(map(response.json.accounts.external, (o) => o));
      });
    });
  }
};
