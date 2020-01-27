'use strict';

class Bank {

  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    return this.balance += amount;
  }
}