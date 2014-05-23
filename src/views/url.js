var App     = require('../dispatchers/app');
var History = require('../stores/history');

App.register({
	HISTORY_PUSH: function(path) {
		window.history.pushState({}, null, History);
	}
});
