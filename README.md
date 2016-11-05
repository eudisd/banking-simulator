# Kustomer Banking Systems 

Welcome to KBS, our banking simulator!

Assumptions Made:
  - A Unix based OS.
  - Only USD is considered
  - No User Account
  - No backend


## Install All Packages
```javascript
npm install
```

## Local Development Flow

## Production Build (Only For Testing)

## Testing

### Run All Tests
```bash
$ npm run webpack:build:production
$ npm start &
$ npm test
$ sudo pkill -f node
```

### Run Only Unit Tests
$ npm run test:unit

### Run Only Unit Tests (Watch Files)
$ npm run test:unit:watch

### Run Only Integration Tests (Watch Files)
$ npm run test:integration

### Run Only Acceptance/E2E Tests
```bash
$ npm run webpack:build:production
$ npm start &
$ npm run test:e2e
$ sudo pkill -f node
```
