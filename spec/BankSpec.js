'use strict';

describe('Bank', function() {
  var bank;

  beforeEach(function() {
    bank = new Bank;
  });

  it('can deposit money in an account', function() {
    expect(bank.deposit(30)).toBe(30)
  });

  it('can add add on value in the account when deposit money', function() {
    bank.deposit(40);
    expect(bank.deposit(50)).toBe(90)
  });

  it('can withdraw money in an account', function() {
    bank.deposit(200);    
    expect(bank.withdraw(100)).toBe(100)
  });
});