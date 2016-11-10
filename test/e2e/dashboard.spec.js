var expect = require('chai').expect;

const TIMEOUT_MAX = 3000;
const dashboardUrl = '/dashboard';

describe('Dashboard E2E Tests', function() {

  this.timeout(20000);

  it('redirects to the landingpage correctly when KBS logo is clicked', function() {
    browser.url(dashboardUrl);
    browser.click('.kbsLogo');
    expect(browser.waitForExist('.landingPage', 1000)).to.be.true;
  });

  it('loads the dashboard correctly', function() {
    browser.url(dashboardUrl);
    expect(browser.waitForExist('.dashboard', 1000)).to.be.true;
  });

  it('loads with no default selected internal account and no transactions', function() {
    browser.url(dashboardUrl);
    browser.waitForExist('h3.transactions__default', TIMEOUT_MAX);
    expect(browser.getText('h3.transactions__default', TIMEOUT_MAX)).to.equal('- No Transactions To Show -');
  });

  it('should load initial transactions when the savings account is selected', function() {
    browser.url(dashboardUrl);
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(1)', 1000);
    browser.click('.menu.transition.visible div:nth-child(1)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.elements('.transactions__row--small').value.length
    ).to.equal(8);
  });

  it('should load initial transactions when the checking account is selected', function() {
    browser.url(dashboardUrl);
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(2)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(2)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.elements('.transactions__row--small').value.length
    ).to.equal(2);
  });

  it('should load the default bank account balances', function() {
    browser.url(dashboardUrl);
    browser.waitForExist('.accountBalance__checking span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__savings span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__total span', TIMEOUT_MAX);
    expect(
      browser.getText('.accountBalance__checking span')
    ).to.equal('$1,000.00');

    expect(
      browser.getText('.accountBalance__savings span')
    ).to.equal('$5,000.00');

    expect(
      browser.getText('.accountBalance__total span')
    ).to.equal('$6,000.00');
  });


  it('should open the modal correctly on "Transfer Money" button click', function() {
    browser.url(dashboardUrl);
    browser.waitForExist('.ui.blue.basic.button', TIMEOUT_MAX);
    browser.click('.ui.blue.basic.button');
    browser.waitForExist('.ui.dimmer.modals.page.transition.visible.active', TIMEOUT_MAX);
  });

  it('should set the memo correctly in a transaction', function() {
    browser.url(dashboardUrl);

    // Open up modal
    browser.url(dashboardUrl);
    browser.waitForExist('.ui.blue.basic.button', TIMEOUT_MAX);
    browser.click('.ui.blue.basic.button');
    browser.waitForExist('.ui.dimmer.modals.page.transition.visible.active', TIMEOUT_MAX);

    // Populate Amount and Memo Fields
    browser.click('.amount');
    browser.setValue('.amount', 1000);

    browser.click('.desc');
    browser.setValue('.desc', 'For Rent');

    // Save
    browser.click('.ui.positive.right.labeled.icon.button');

    // Check The Transaction
    browser.waitForExist('.accountBalance__checking span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__savings span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__total span', TIMEOUT_MAX);

    expect(
      browser.getText('.accountBalance__checking span')
    ).to.equal('$2,000.00');

    expect(
      browser.getText('.accountBalance__savings span')
    ).to.equal('$4,000.00');

    expect(
      browser.getText('.accountBalance__total span')
    ).to.equal('$6,000.00');

    // Check Transactions Length
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(2)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(2)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.elements('.transactions__row--small').value.length
    ).to.equal(3);

    // Check Transactions Savings Amount
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(1)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(1)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.getText('tr.transactions__row--small:nth-child(1) td:last-child')
    ).to.equal('$4,000.00');

    expect(
      browser.getText('.rowDesc')[0]
    ).to.equal('For Rent');

    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(2)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(2)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.getText('tr.transactions__row--small:nth-child(1) td:last-child')
    ).to.equal('$2,000.00');
    expect(
      browser.getText('.rowDesc')[0]
    ).to.equal('For Rent');
  });

  it('should set the amount correctly in a transaction', function() {
    browser.url(dashboardUrl);

    // Open up modal
    browser.url(dashboardUrl);
    browser.waitForExist('.ui.blue.basic.button', TIMEOUT_MAX);
    browser.click('.ui.blue.basic.button');
    browser.waitForExist('.ui.dimmer.modals.page.transition.visible.active', TIMEOUT_MAX);

    // Populate Amount and Memo Fields
    browser.click('.amount');
    browser.setValue('.amount', 1000);

    browser.click('.desc');
    browser.setValue('.desc', 'For Rent');

    // Save
    browser.click('.ui.positive.right.labeled.icon.button');

    // Check The Transaction
    browser.waitForExist('.accountBalance__checking span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__savings span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__total span', TIMEOUT_MAX);

    expect(
      browser.getText('.accountBalance__checking span')
    ).to.equal('$2,000.00');

    expect(
      browser.getText('.accountBalance__savings span')
    ).to.equal('$4,000.00');

    expect(
      browser.getText('.accountBalance__total span')
    ).to.equal('$6,000.00');

    // Check Transactions Length
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(2)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(2)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.elements('.transactions__row--small').value.length
    ).to.equal(3);

    // Check Transactions Savings Amount
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(1)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(1)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.getText('tr.transactions__row--small:nth-child(1) td:last-child')
    ).to.equal('$4,000.00');

    expect(
      browser.getText('.rowAmount')[0]
    ).to.equal('-$1,000.00');

    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(2)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(2)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.getText('tr.transactions__row--small:nth-child(1) td:last-child')
    ).to.equal('$2,000.00');

    expect(
      browser.getText('.rowAmount')[0]
    ).to.equal('$1,000.00');
  });

  it('should transfer $1000 from savings to checking', function() {
    browser.url(dashboardUrl);

    // Open up modal
    browser.url(dashboardUrl);
    browser.waitForExist('.ui.blue.basic.button', TIMEOUT_MAX);
    browser.click('.ui.blue.basic.button');
    browser.waitForExist('.ui.dimmer.modals.page.transition.visible.active', TIMEOUT_MAX);

    // Populate Amount and Memo Fields
    browser.click('.amount');
    browser.setValue('.amount', 1000);

    browser.click('.desc');
    browser.setValue('.desc', 'For Rent');

    // Save
    browser.click('.ui.positive.right.labeled.icon.button');

    // Check The Transaction
    browser.waitForExist('.accountBalance__checking span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__savings span', TIMEOUT_MAX);
    browser.waitForExist('.accountBalance__total span', TIMEOUT_MAX);

    expect(
      browser.getText('.accountBalance__checking span')
    ).to.equal('$2,000.00');

    expect(
      browser.getText('.accountBalance__savings span')
    ).to.equal('$4,000.00');

    expect(
      browser.getText('.accountBalance__total span')
    ).to.equal('$6,000.00');

    // Check Transactions Length
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(2)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(2)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.elements('.transactions__row--small').value.length
    ).to.equal(3);

    // Check Transactions Savings Amount
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(1)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(1)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.getText('tr.transactions__row--small:nth-child(1) td:last-child')
    ).to.equal('$4,000.00');

    // Check Transactions Savings Amount
    browser.waitForExist('.selectedInternalAccount', TIMEOUT_MAX);
    browser.click('.selectedInternalAccount');
    browser.waitForExist('.menu.transition.visible div:nth-child(2)', TIMEOUT_MAX);
    browser.click('.menu.transition.visible div:nth-child(2)');
    browser.waitForExist('.transactions__table', TIMEOUT_MAX);
    expect(
      browser.getText('tr.transactions__row--small:nth-child(1) td:last-child')
    ).to.equal('$2,000.00');
  });
});
