var Promise        = require('es6-promise').Promise;
var Store          = require('../../lib/store');
var DataDispatcher = require('../dispatchers/data');
var StorageBus     = require('../buses/storage');

var merge = require('react/lib/merge');

var Time = Store.clone({
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
});

DataDispatcher.register('TIME_UPDATE', function(payload) {
	return new Promise(function(resolve, reject) {
		if (Time.set(payload)) {
			resolve(payload);
		} else {
			reject(new Error('Unable to set Time'))
		}
	});
});

module.exports = Time;
