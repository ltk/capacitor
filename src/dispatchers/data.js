var Dispatcher     = require('./dispatcher');
var ActionsBus     = require('../buses/actions');
var DataDispatcher = new Dispatcher();

ActionsBus.recv(function(type, payload) {
	DataDispatcher.dispatch(type, payload);
});

module.exports = DataDispatcher;
