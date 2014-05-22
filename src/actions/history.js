var ActionsBus = require("../buses/actions");

var History = {
	update: function(props) {
		ActionsBus.send('HISTORY_UPDATE', props);
	},

	filter: function(props) {
		ActionsBus.send('HISTORY_FILTER', props);
	},

	clearFilter: function() {
		ActionsBus.send('HISTORY_CLEAR_FILTER');
	}
}

module.exports = History;
