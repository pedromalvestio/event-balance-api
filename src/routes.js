const express = require('express');
const routes = express.Router();

const account = require('./controllers/AccountController');
const event = require('./controllers/EventController');
const reset = require('./controllers/ResetController');

routes.post("/reset", reset.reset);
routes.get("/balance", account.balance);
routes.post("/event", event.event);

module.exports = routes;