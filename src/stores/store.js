var Promise = require('es6-promise').Promise;
var merge   = require('react/lib/merge');

var Store = {
	clone: function(props) {
		return merge(props, Store);
	},

	register: function(dispatcher, event, callback) {
		return dispatcher.register(event, function(payload) {
			return new Promise(function(resolve, reject) {
				callback(payload, resolve, reject);
			}).catch(function(e) { console.error(e) });
		});
	}
}

module.exports = Store;
