'use strict';

class Account {

  constructor(balance = 0, transactions =[]) {
    this.balance = balance;
    this.transactions = transactions;
  }
 
  deposit(amount) {
    var transaction = new Transaction;
    var date = new DateFormat;
    this.balance += transaction.add(amount);
    this.transactions.push([date.dateFormat(), amount, this.balance]);
  }

  withdraw(amount) {
    var transaction = new Transaction;
    this.balance += transaction.remove(amount);
  }

}