const accountService = require('../services/AccountService');
const eventService = require('../services/EventService');

module.exports = {
    reset(req, res) {
        accountService.reset();
        eventService.reset();
        res.send("OK");
    }
}