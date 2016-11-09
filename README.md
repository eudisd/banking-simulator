# Kustomer Banking Systems

Welcome to KBS, our banking simulator!  With this application we can withdraw and
deposit money.  We also see a running ledger of all transactions.

Before we get started, here are the assumptions I made:
  - A Unix based OS.
  - Latest Chrome Browser
  - Only USD is considered

## Simple Architecture

The application is build using React, React Router, Redux and Falcor for
simple client side data management.

# Getting Started

## Install All Packages
```javascript
npm install
```

## Local Development Flow

For local development we use webpack-dev-server with hot reloading.  To run, type:

```bash
$ npm run webpack:hot
```

## Production Build (For Testing Only)
```bash
$ npm run webpack:build:production
$ npm start
```

We also build a production bundle with chunking.  This build has js minificatinon, and 
cheap source maps enabled.  It is used for running the e2e tests, although both the webpack
dev server and this can be used to run the e2e tests.

## Testing

Testing is implemented in two ways: unit tests and and e2e tests.  Rather than
testing everything, I instead tested the critical code path (reducers, stores, helpers, and full e2e).

### Run All Tests
```bash
$ npm run webpack:build:production
$ npm start &
$ npm test
$ npm stop
```

### Run Only Unit Tests
$ npm run test:unit

### Run Only Unit Tests (Watch Files)
$ npm run test:unit:watch

### Run Only E2E Tests
```bash
$ npm run webpack:build:production
$ npm start &
$ npm run test:e2e
$ npm stop
```
