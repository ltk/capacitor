var ActionsBus = require("../buses/actions");

var Time = {
	update: function(props) {
		ActionsBus.send('TIME_UPDATE', props);
	}
}

module.exports = Time;
