const eventService = require('../services/EventService');

module.exports = {
    event(req, res) {
        const event = eventService.setEvent(req.body);
        if(event){
            res.status(201).send(event);
        } else {
            res.status(404).send("0");
        }
    }
}