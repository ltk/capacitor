var Storage = require('../dispatchers/storage');

var Time = require('../lib/store').clone({
	_data: {
		time: Date.now()
	},

	get: function() {
		return Time._data;
	},

	set: function(props) {
		Object.keys(props).reduce(function(data, key) {
			data[key] = props[key];
			return data;
		}, Time._data);

		Time.emitChange();
	}
});

Storage.register({
	TIME_UPDATE: function(payload) {
		Time.set(payload);
		return true;
	}
});

module.exports = Time;
