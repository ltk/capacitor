var App      = require('../dispatchers/app');
var routes   = require("../routes");
var qs       = require('querystring');

var History = require('../../lib/store').clone({
	_data: {},

	toString: function() {
		var data = History.get();
		var path = data.path;
		var query = qs.stringify(data.search);

		if (query) {
			path += '?' + query;
		}

		return path;
	},

	get: function() {
		return History._data;
	},

	push: function(path) {
		var resolved = routes.recognize(path);

		if (resolved) {
			History.set({
				handler   : resolved[0].handler,
				params    : resolved[0].params,
				search    : null,
				path      : path
			});
		}
	},

	set: function(props) {
		Object.keys(props).reduce(function(data, key) {
			data[key] = props[key];
			return data;
		}, History._data);

		History.emitChange();
	}
});

App.register({
	HISTORY_PUSH: function(path) {
		History.push(path);
		return true;
	}
});

module.exports = History;
