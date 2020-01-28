'use strict';

describe('', function() {
  it('users can deposit withdraw money and print out statement', function() {
    var account = new account;
    account.deposit(400);
    account.withdraw(100);
    expect(account.transactions.diplay()).toContain('date || credit || debit || balance')
  });
});



// 28/01/2020 || || 100.00 || 700.00
// 28/01/2020 || 400.00 || || 800.00