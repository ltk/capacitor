var State = require("../dispatchers/state");

var Time  = module.exports = {
	update: function(props) {
		State.dispatch('TIME_UPDATE', props);
	}
};
