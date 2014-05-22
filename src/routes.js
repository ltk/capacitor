var HistoryActions = require('./actions/history');
var qs = require('querystring');

var routes = {
	'/': function() {
		HistoryActions.update({
			path: '',
			search: qs.parse(window.location.search.slice(1))
		});
	}
};

module.exports = routes;
