import falcor from 'falcor';
import truncate from 'lodash/truncate';
import faker from 'faker';

const aggregateInternalAccountId = 'all';
const secondInternalAccountId = '789012';
const thirdInternalAccountId = '111213';

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
          type: 'all',
          transactions: [
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Merged 1',
              amount: -100,
              type: 'debit',
              balance: 4900
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Merged 2',
              amount: +200,
              type: 'deposit',
              balance: 5100
            }
          ]
        },
        {
          id: secondInternalAccountId,
          name: 'KBS',
          idName: `KBS-savings-...${secondInternalAccountId.split('').slice(-4).join('')}`,
          type: 'savings',
          balance: 5000,
          transactions: [
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 4900
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 1',
              amount: +200,
              type: 'deposit',
              balance: 5100
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 4900
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 1',
              amount: +200,
              type: 'deposit',
              balance: 5100
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 4900
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 1',
              amount: +200,
              type: 'deposit',
              balance: 5100
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 4900
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
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
          idName: `KBS-checking-...${thirdInternalAccountId.split('').slice(-4).join('')}`,
          type: 'checking',
          balance: 1000,
          transactions: [
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 3',
              amount: -200,
              type: 'debit',
              balance: 4800
            },
            {
              id: faker.random.uuid(),
              date: (new Date()).toJSON(),
              description: 'Testing 4',
              amount: +300,
              type: 'deposit',
              balance: 5200
            }
          ]
        }
      ]
    }
  }
});

