var HistoryStore   = require('../stores/history');
var StorageBus     = require('../buses/storage');
var history        = window.history;

StorageBus.recv(function(type, payload) {
	switch (type) {
		case 'HISTORY_FILTER':
		case 'HISTORY_UPDATE':
			history.replaceState({}, null, HistoryStore.getURL());
			break;
	}
});
