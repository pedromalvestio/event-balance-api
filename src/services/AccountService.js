const Account = require('../entities/Account');
let accounts = [];

module.exports = {
    create(account) {
        const { id , balance } = account;
        accounts.push(new Account(id, balance));
        return account;
    }, 
    
    balance(accountId){
        const account = accounts.find((account) => account.id === accountId);
        if (account) return account.balance;
    },

    deposit(event){
        const { destination, amount } = event;
        const depositAccount = accounts.find((account) => account.id === destination);

        if (depositAccount) {
            depositAccount.deposit(amount);
        } else {
            return this.create({"id": destination, "balance": amount});
        }

        return depositAccount;
    },
    
    withdraw(event){
        const { origin, amount } = event;
        const withdrawAccount = accounts.find((account) => account.id === origin);

        if (withdrawAccount) {
            withdrawAccount.withdraw(amount);
        }

        return withdrawAccount;
    },

    reset(){
        accounts = [];
    }
}