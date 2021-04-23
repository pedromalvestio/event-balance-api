module.exports = class Event {

    constructor (eventType, accountId, amount){
        this.eventType = eventType;
        this.accountId = accountId;
        this.amount = amount;
    }

}