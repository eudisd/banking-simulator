import falcor from 'falcor';
import truncate from 'lodash/truncate';
import faker from 'faker';

const aggregateInternalAccountId = 'all';
const secondInternalAccountId = '789012';
const thirdInternalAccountId = '111213';
const TRUNCATE_MAX = 5;

export default new falcor.Model({
  cache: {
    accounts: {
      external: [
        {
          id: faker.random.uuid(),
          name: 'JP Morgan Chase',
          type: 'savings',
          balance: 200000
        }
      ],
      internal: [
        {
          id: aggregateInternalAccountId,
          name: 'KBS',
          idName: 'All Transactions',
          type: 'all'
        },
        {
          id: secondInternalAccountId,
          name: 'KBS',
          idName: `KBS-${truncate(secondInternalAccountId, { length: TRUNCATE_MAX })}`,
          type: 'savings',
          balance: 5000,
          transactions: [
            {
              date: faker.date.past(),
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 4900
            },
            {
              date: faker.date.past(),
              description: 'Testing 1',
              amount: +200,
              type: 'deposit',
              balance: 5100
            }
          ]
        },
        {
          id: thirdInternalAccountId,
          name: 'KBS',
          idName: `KBS-${truncate(thirdInternalAccountId, { length: TRUNCATE_MAX })}`,
          type: 'checking',
          balance: 1000
        }
      ]
    }
  }
});

