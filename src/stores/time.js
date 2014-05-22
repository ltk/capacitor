var Promise        = require('es6-promise').Promise;
var DataDispatcher = require('../dispatchers/data');
var StorageBus     = require('../buses/storage');

var merge = require('react/lib/merge');

var Time = {
	_data: {
		time: Date.now()
	},

	get: function() {
		return Time._data;
	},

	set: function(props) {
		Time._data = merge(Time._data, props);
		StorageBus.send('TIME_UPDATE', this.get());
		return true;
	}
}

DataDispatcher.register('TIME_UPDATE', function(payload) {
	return new Promise(function(resolve, reject) {
		if (Time.set(payload)) {
			resolve(payload);
		} else {
			reject(new Error({ message: 'Unable to set Time', payload: payload ));
		}
	});
});

module.exports = Time;
