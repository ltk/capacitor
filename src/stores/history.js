var StorageBus      = require('../buses/storage');
var StateDispatcher = require('../dispatchers/state');
var Store           = require("./store");
var merge           = require('react/lib/merge');

var qs = require('querystring');

var History = Store.clone({
	_data: {
		search: {}
	},

	get: function() {
		return History._data;
	},

	getURL: function() {
		var params = qs.stringify(History._data.search);
		return location.pathname + (params? '?' + params : '');
	},

	set: function(props) {
		History._data = merge(History._data, props);

		return true;
	}
});

History.register(StateDispatcher, 'HISTORY_UPDATE', function(payload, resolve, reject) {
	if (History.set(payload)) {
		resolve(payload);
		StorageBus.send('HISTORY_UPDATE', History.get());
	} else {
		reject(new Error({ message: 'Unable to set History', payload: payload }));
	}
});

History.register(StateDispatcher, 'HISTORY_FILTER', function(payload, resolve, reject) {
	if (History.set({ search: payload })) {
		resolve(payload);
		StorageBus.send('HISTORY_FILTER', History.get());
	} else {
		reject(new Error({ message: 'Unable to set History', payload: payload }));
	}
});

History.register(StateDispatcher, 'HISTORY_CLEAR_FILTER', function(payload, resolve, reject) {
	if (History.set({ search: {} })) {
		resolve(payload);
		StorageBus.send('HISTORY_FILTER', History.get());
	} else {
		reject(new Error({ message: 'Unable to set History', payload: payload }));
	}
});

module.exports = History;
