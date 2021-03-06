'use strict';

class Account {

  constructor(balance = 0, transactions = new Statement) {
    this.balance = balance;
    this.transactions = transactions;
  }
 
  deposit(amount) {
    var transaction = new Transaction;
    var date = new DateFormat;
    this.balance += transaction.add(amount);
    // this.transactions.push([date.dateFormat(), amount, this.balance]);
    this.transactions.log([date.dateFormat(), amount, this.balance]);
  }

  withdraw(amount) {
    var transaction = new Transaction;
    var date = new DateFormat;
    this.balance += transaction.remove(amount);
    // this.transactions.push([date.dateFormat(), -amount, this.balance]);
    this.transactions.log([date.dateFormat(), -amount, this.balance]);

  }
}