var Emitter = require("events").EventEmitter;
var merge   = require("react/lib/merge");
var CHANGE  = "change";

var Store = merge(Emitter.prototype, {
	CHANGE: CHANGE,

	clone: function(props) {
		return merge(Store, props);
	},

	emitChange: function() {
		this.emit(CHANGE);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE, callback);
	}
});

module.exports = Store;
