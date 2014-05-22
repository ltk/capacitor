var HistoryActions = require('./actions/history');
var qs = require('querystring');

var routes = {
	'/': function() {
		HistoryActions.update({
			route: '/',
			search: qs.parse(window.location.search.slice(1))
		});
	}
};

module.exports = routes;
