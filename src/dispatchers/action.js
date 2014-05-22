var Dispatcher       = require('./dispatcher');
var ActionsBus       = require('../buses/actions');
var ActionDispatcher = new Dispatcher();

ActionsBus.recv(function(type, payload) {
	ActionDispatcher.dispatch(type, payload);
});

module.exports = ActionDispatcher;
