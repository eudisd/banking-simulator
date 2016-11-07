import map from 'lodash/map';
import model from 'js/models/falcor';

export default {
  getInternalAccounts() {
    return new Promise((resolve, reject) => {
      return model.get('accounts.internal[0..2]["id", "name", "idName", "type", "balance", "transactions"]').then((response) => {
        resolve(map(response.json.accounts.internal, (o) => o));
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
