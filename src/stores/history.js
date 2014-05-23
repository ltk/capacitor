var App      = require('../dispatchers/app');
var routes   = require("../routes");
var qs       = require('querystring');

var History = require('../../lib/store').clone({
	_data: {},

	toString: function() {
		var data = History.get();
		var path = data.pathname;
		var query = qs.stringify(data.search);

		return query? path + '?' + query : path;
	},

	get: function() {
		return History._data;
	},

	push: function(pathname) {
		var resolved = routes.recognize(pathname);

		if (resolved) {
			History.set({
				handler   : resolved[0].handler,
				params    : resolved[0].params,
				search    : null,
				pathname  : pathname
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
