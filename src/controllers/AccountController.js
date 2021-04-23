const accountService = require('../services/AccountService');

module.exports = {
    balance(req, res){
        const { account_id } = req.query;
        const balance = accountService.balance(account_id);
        if(balance){
            res.send(balance.toString());
        } else {
            res.status(404).send("0");
        }
    },
}