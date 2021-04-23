const Event = require('../entities/Event');
const Account = require('./AccountService');
let events = [];
const eventType = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
    TRANSFER: "transfer"
}

module.exports = {
    setEvent(event) {
        const {type} = event;
        if (type) {
            switch (type) {
                case eventType.DEPOSIT:
                    return this.deposit(event);
                case eventType.WITHDRAW:
                    return this.withdraw(event);
                case eventType.TRANSFER:
                    return this.transfer(event);
                default:
                    break;
            }
        }
    },

  
    deposit(event){
        const account = Account.deposit(event);
        if (account) {
            const { type, destination , amount } = event;
            events.push(new Event(type, destination , amount));
            return { "destination" : {...account} };
        }
    },
    
    withdraw(event){
        const account = Account.withdraw(event);
        if (account) {
            const { type, origin, amount } = event;
            events.push(new Event(type, origin, amount));
            return { "origin" : {...account} };
        }
    },

    transfer(event){
        const withdrawAccount = this.withdraw(event);
        if (withdrawAccount) {
            const depositAccount = this.deposit(event);
            if (depositAccount) return {...withdrawAccount, ...depositAccount};
        }
    },

    reset(){
        events = [];
    },
}