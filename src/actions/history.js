var App = require("../dispatchers/app");

var History = {
	push: function(path) {
		App.dispatch('HISTORY_PUSH', path);
	}
};

module.exports = History;
