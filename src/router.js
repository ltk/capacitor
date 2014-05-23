var Router          = require('director/build/director').Router;
var HistoryActions = require('./actions/history');

var router = Router({
	'/' : function() {
		HistoryActions.push({
			path: '/'
		});
	},

	'/about': function() {
		HistoryActions.push({
			path: 'about'
		});
	},

	'/contact': function() {
		HistoryActions.push({
			path: 'contact'
		});
	}
});

router.configure({
	html5history: true
})

router.init();

module.exports = router;
