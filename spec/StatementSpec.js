// 'use strict';

describe('Statement', function() {
  var account = new Account;
  var transactions;

  beforeEach(function() {
    transactions = [['14/02/2020', 1000, 1000], ['15/02/2020', -200, 800]]
    spyOn(account, 'transactions');
  });

  it('should display the statement', function() {
    var statement = new Statement(transactions);
    expect(statement.display()).toContain('14/02/2020')
  });

  it('should display the header', function() {
    var statement = new Statement(transactions);
    expect(statement.display()).toContain('date || credit || debit || balance')
  });
});