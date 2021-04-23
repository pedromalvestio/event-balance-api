module.exports =  class Account {
    
    constructor (id, balance){
        this.id = id;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        this.balance = this.balance - amount;
    }
}