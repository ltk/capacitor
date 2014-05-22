var DataDispatcher = require('../dispatchers/data');
var StorageBus     = require('../buses/storage');
var Store          = require("./store");
var merge          = require('react/lib/merge');

var Time = Store.clone({
	_data: {
		time: Date.now()
	},

	get: function() {
		return Time._data;
	},

	set: function(props) {
		Time._data = merge(Time._data, props);
		return true;
	}
});

Time.register(DataDispatcher, 'TIME_UPDATE', function(payload, resolve, reject) {
	if (Time.set(payload)) {
		resolve(payload);
		StorageBus.send('TIME_UPDATE', Time.get());
	} else {
		reject(new Error({ message: 'Unable to set Time', payload: payload }));
	}
});

module.exports = Time;
