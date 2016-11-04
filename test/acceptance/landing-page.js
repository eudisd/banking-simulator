var expect = require('chai').expect;

describe('Landing Page Acceptance Tests', function() {
  it('is a test', function() {
    browser.url('/');
    expect(browser.getTitle()).to.equal('KBS');
  });
});
