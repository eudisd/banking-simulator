import falcor from 'falcor';
import range from 'lodash/range';
import truncate from 'lodash/truncate';
import faker from 'faker';

const externalAccountId = '5555';
const secondInternalAccountId = '789012';
const thirdInternalAccountId = '111213';
const id = 1;
const date = (new Date('July 21, 1983 01:15:00')).toJSON();

export default new falcor.Model({
  cache: {
    accounts: {
      external: [
        {
          id: externalAccountId,
          name: 'JP Morgan Chase',
          type: 'savings',
          idName: `(External)-Chase-${externalAccountId.split('').slice(-4).join('')}`,
          balance: 200000
        }
      ],
      internal: [
        {
          id: secondInternalAccountId,
          name: 'KBS',
          idName: `KBS-savings-...${secondInternalAccountId.split('').slice(-4).join('')}`,
          type: 'savings',
          balance: 5000,
          transactions: [
            {
              id: id + 3,
              date,
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 4900
            },
            {
              id: id + 4,
              date,
              description: 'Testing 1',
              amount: +200,
              type: 'deposit',
              balance: 5100
            },
            {
              id: id + 5,
              date,
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 5000
            },
            {
              id: id + 6,
              date,
              description: 'Testing 1',
              amount: +200,
              type: 'deposit',
              balance: 5200
            },
            {
              id: id + 7,
              date,
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 5100
            },
            {
              id: id + 8,
              date,
              description: 'Testing 1',
              amount: +200,
              type: 'deposit',
              balance: 5100
            },
            {
              id: id + 9,
              date,
              description: 'Testing 1',
              amount: -100,
              type: 'debit',
              balance: 5200
            },
            {
              id: id + 10,
              date,
              description: 'Testing 1',
              amount: -200,
              type: 'debit',
              balance: 5000
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
              id: id + 11,
              date,
              description: 'Testing 3',
              amount: -200,
              type: 'debit',
              balance: 800
            },
            {
              id: id + 12,
              date,
              description: 'Testing 4',
              amount: +200,
              type: 'deposit',
              balance: 1000
            }
          ]
        }
      ]
    }
  }
});

