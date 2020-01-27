'use strict';

class Account {

  constructor(balance = 0) {
    this.balance = balance;
  }
 
  deposit(amount) {
    var transaction = new Transaction;
    this.balance += transaction.add(amount);
  }

  withdraw(amount) {
    var transaction = new Transaction;
    this.balance += transaction.remove(amount);
  }

}