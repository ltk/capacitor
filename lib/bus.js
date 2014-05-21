var Emitter = require("events").EventEmitter;
var merge   = require("react/lib/merge");
var MESSAGE = "message";

var Bus = merge(Emitter.prototype, {
	clone: function(props) {
		return merge(Bus, props);
	},

	send: function(type, payload) {
		this.emit(MESSAGE, type, payload);
	},

	recv: function(callback) {
		this.on(MESSAGE, callback);
	},

	ignore:function (callback) {
		this.removeListener(MESSAGE, callback);
	}
});

module.exports = Bus;
