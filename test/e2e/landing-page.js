var expect = require('chai').expect;

describe('Landing Page E2E Tests', function() {
  it('loads the landing page correctly', function() {
    browser.url('/');
    expect(browser.getTitle()).to.equal('KBS');
  });

  it('redirects to the dashboard correctly when Login As Guest button is clicked', function() {
    browser.url('/');
    browser.click('.landingPage__loginButton button');
    expect(browser.waitForExist('.dashboard', 1000)).to.be.true;
  });
});
